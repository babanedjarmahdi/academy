"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  semesters,
  allLessons,
  getLesson,
  getCapstone,
  nextLesson,
  semesterLessons,
} from "@/data";
import {
  CAPSTONE_BASE_XP,
  SEMESTER_BONUS_XP,
  DIFFICULTY_META,
} from "@/lib/constants";
import { getLevel, levelTitle, lessonTotalXp } from "@/lib/xp";
import { loadState, saveState, clearState } from "@/lib/storage";
import { todayKey, uid } from "@/lib/utils";
import {
  ACHIEVEMENTS,
  isAchievementUnlocked,
  type AchievementContext,
} from "@/lib/achievements";
import type {
  AcademyState,
  ActivityEntry,
  CapstoneProgress,
  Lesson,
  LessonProgress,
} from "@/types";

export interface LevelInfo {
  level: number;
  title: string;
  current: number;
  next: number;
  into: number;
  progress: number;
}

export interface Toast {
  id: string;
  title: string;
  detail?: string;
  xp?: number;
  type: "xp" | "achievement" | "info";
}

interface SemesterCompletion {
  semesterId: string;
  number: number;
  title: string;
  lessons: number;
  lessonsDone: number;
  capstoneDone: boolean;
  complete: boolean;
}

interface AcademyValue {
  state: AcademyState;
  hydrated: boolean;
  toasts: Toast[];
  dismissToast: (id: string) => void;

  xp: number;
  levelInfo: LevelInfo;
  stats: {
    totalLessons: number;
    completedLessons: number;
    exercisesDone: number;
    checklistDone: number;
    notesCount: number;
    totalCapstones: number;
    capstonesCompleted: number;
    semestersCompleted: number;
    semestersTotal: number;
    overallProgress: number;
    weekStudyDays: number;
    weekLessons: number;
  };
  streak: number;
  recentActivities: ActivityEntry[];
  semestersStatus: SemesterCompletion[];
  unlockedAchievements: string[];
  todayMission: Lesson | undefined;

  getLessonProgress: (id: string) => LessonProgress;
  getCapstoneProgress: (id: string) => CapstoneProgress;
  toggleLessonChecklist: (id: string, item: string) => void;
  toggleLessonExercise: (id: string, index: number) => void;
  markLessonComplete: (id: string, completed: boolean) => void;
  setLessonNotes: (id: string, notes: string) => void;
  toggleCapstoneChecklist: (id: string, item: string) => void;
  markCapstoneComplete: (id: string, completed: boolean) => void;
  setCapstoneNotes: (id: string, notes: string) => void;
  setCapstoneReview: (id: string, review: string) => void;
  completeOnboarding: () => void;
  resetProgress: () => void;
  restoreState: (next: AcademyState) => void;
  notify: (toast: Omit<Toast, "id">) => void;
}

const AcademyContext = createContext<AcademyValue | null>(null);

function defaultLessonProgress(): LessonProgress {
  return { completed: false, checklist: {}, exercises: {}, notes: "" };
}

function defaultCapstoneProgress(): CapstoneProgress {
  return { completed: false, checklist: {}, notes: "", finalReview: "" };
}

function computeStreak(days: string[]): number {
  const set = new Set(days);
  let streak = 0;
  const cursor = new Date();
  if (!set.has(todayKey(cursor))) {
    cursor.setDate(cursor.getDate() - 1);
  }
  while (set.has(todayKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function computeXp(state: AcademyState): number {
  let total = 0;
  for (const [id, prog] of Object.entries(state.lessonProgress)) {
    if (!prog.completed) continue;
    const lesson = getLesson(id);
    if (lesson) total += lessonTotalXp(lesson);
  }
  for (const [id, prog] of Object.entries(state.capstoneProgress)) {
    if (!prog.completed) continue;
    const capstone = getCapstone(id);
    if (capstone) total += CAPSTONE_BASE_XP + DIFFICULTY_META[capstone.difficulty].xp;
  }
  for (const semester of semesters) {
    const lessons = semesterLessons(semester);
    const capstone = state.capstoneProgress[semester.capstone.id];
    const allDone = lessons.every((l) => state.lessonProgress[l.id]?.completed);
    if (allDone && capstone?.completed) {
      total += SEMESTER_BONUS_XP;
    }
  }
  for (const id of state.achievements) {
    const def = ACHIEVEMENTS.find((a) => a.id === id);
    if (def) total += def.reward;
  }
  return total;
}

function evaluateAchievements(state: AcademyState): {
  state: AcademyState;
  unlocked: { def: (typeof ACHIEVEMENTS)[number]; context: AchievementContext }[];
} {
  let current = state;
  const unlocked: { def: (typeof ACHIEVEMENTS)[number]; context: AchievementContext }[] = [];
  for (let pass = 0; pass < 10; pass += 1) {
    let added = false;
    const ctx = buildContext(current);
    for (const def of ACHIEVEMENTS) {
      if (current.achievements.includes(def.id)) continue;
      if (isAchievementUnlocked(def.id, ctx)) {
        current = {
          ...current,
          achievements: [...current.achievements, def.id],
          activity: prependActivity(current.activity, {
            type: "achievement",
            title: `Achievement unlocked: ${def.title}`,
            detail: def.description,
            xp: def.reward,
          }),
        };
        unlocked.push({ def, context: ctx });
        added = true;
      }
    }
    if (!added) break;
  }
  return { state: current, unlocked };
}

function buildContext(state: AcademyState): AchievementContext {
  const lessons = allLessons();
  let lessonsCompleted = 0;
  let exercisesDone = 0;
  let checklistDone = 0;
  let notesCount = 0;
  let capstonesCompleted = 0;
  let semestersCompleted = 0;
  const techCompleted: Record<string, boolean> = {};

  for (const lesson of lessons) {
    const prog = state.lessonProgress[lesson.id];
    if (!prog) continue;
    if (prog.completed) {
      lessonsCompleted += 1;
      for (const tech of lesson.technologies) {
        techCompleted[tech] = true;
      }
    }
    const full = lesson.checklist.length;
    const done = lesson.checklist.filter((c) => prog.checklist[c]).length;
    if (full > 0 && done === full) checklistDone += 1;
    exercisesDone += lesson.exercises.filter((_, i) => prog.exercises[i]).length;
    if (prog.notes.trim().length > 0) notesCount += 1;
  }

  for (const capstone of semesters.map((s) => s.capstone)) {
    if (state.capstoneProgress[capstone.id]?.completed) capstonesCompleted += 1;
  }

  for (const semester of semesters) {
    const allDone = semesterLessons(semester).every(
      (l) => state.lessonProgress[l.id]?.completed
    );
    const capDone = state.capstoneProgress[semester.capstone.id]?.completed;
    if (allDone && capDone) semestersCompleted += 1;
  }

  // tech completed means ALL lessons for that tech are completed
  const byTech: Record<string, { total: number; done: number }> = {};
  for (const lesson of lessons) {
    for (const tech of lesson.technologies) {
      byTech[tech] ??= { total: 0, done: 0 };
      byTech[tech].total += 1;
      if (state.lessonProgress[lesson.id]?.completed) byTech[tech].done += 1;
    }
  }
  for (const [tech, counts] of Object.entries(byTech)) {
    if (counts.total > 0 && counts.done === counts.total) techCompleted[tech] = true;
  }

  const xp = computeXp(state);
  const studyDays = state.studyDays;
  const last7 = new Set<string>();
  for (let i = 0; i < 7; i += 1) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    last7.add(todayKey(d));
  }
  const weekStudyDays = studyDays.filter((d) => last7.has(d)).length;

  return {
    state,
    xp,
    lessonsCompleted,
    exercisesDone,
    checklistDone,
    notesCount,
    capstonesCompleted,
    semestersCompleted,
    streak: computeStreak(studyDays),
    lessonCount: lessons.length,
    techCompleted,
    weekStudyDays,
  };
}

function prependActivity(
  list: ActivityEntry[],
  entry: Omit<ActivityEntry, "id" | "at">
): ActivityEntry[] {
  const full: ActivityEntry = {
    ...entry,
    id: uid("act"),
    at: new Date().toISOString(),
  };
  return [full, ...list].slice(0, 120);
}

function recordStudyDay(state: AcademyState): AcademyState {
  const today = todayKey();
  if (state.studyDays.includes(today)) return state;
  return { ...state, studyDays: [...state.studyDays, today] };
}

export function AcademyProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AcademyState | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    const loaded = loadState();
    setState(loaded);
  }, []);

  useEffect(() => {
    if (!state) return;
    saveState(state);
  }, [state]);

  useEffect(() => {
    if (!state) return;
    const { state: next, unlocked } = evaluateAchievements(state);
    if (next !== state) {
      setState({ ...next, updatedAt: new Date().toISOString() });
    }
    if (unlocked.length > 0) {
      for (const { def } of unlocked) {
        pushToast({
          type: "achievement",
          title: `Achievement unlocked: ${def.title}`,
          detail: `${def.description} (+${def.reward} XP)`,
          xp: def.reward,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state?.achievements.length, state?.lessonProgress, state?.capstoneProgress]);

  const pushToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = uid("toast");
    setToasts((prev) => [...prev, { ...toast, id }]);
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const mutate = useCallback(
    (fn: (s: AcademyState) => AcademyState) => {
      setState((prev) => {
        if (!prev) return prev;
        const next = fn(prev);
        if (next === prev) return prev;
        return { ...next, updatedAt: new Date().toISOString() };
      });
    },
    []
  );

  const getLessonProgress = useCallback(
    (id: string): LessonProgress => {
      if (!state) return defaultLessonProgress();
      return state.lessonProgress[id] ?? defaultLessonProgress();
    },
    [state]
  );

  const getCapstoneProgress = useCallback(
    (id: string): CapstoneProgress => {
      if (!state) return defaultCapstoneProgress();
      return state.capstoneProgress[id] ?? defaultCapstoneProgress();
    },
    [state]
  );

  const toggleLessonChecklist = useCallback(
    (id: string, item: string) => {
      mutate((s) => {
        const existing = s.lessonProgress[id] ?? defaultLessonProgress();
        const checklist = { ...existing.checklist, [item]: !existing.checklist[item] };
        const next = recordStudyDay(s);
        return {
          ...next,
          lessonProgress: {
            ...next.lessonProgress,
            [id]: { ...existing, checklist },
          },
        };
      });
    },
    [mutate]
  );

  const toggleLessonExercise = useCallback(
    (id: string, index: number) => {
      mutate((s) => {
        const existing = s.lessonProgress[id] ?? defaultLessonProgress();
        const exercises = { ...existing.exercises, [index]: !existing.exercises[index] };
        const next = recordStudyDay(s);
        return {
          ...next,
          lessonProgress: {
            ...next.lessonProgress,
            [id]: { ...existing, exercises },
          },
        };
      });
    },
    [mutate]
  );

  const markLessonComplete = useCallback(
    (id: string, completed: boolean) => {
      mutate((s) => {
        const existing = s.lessonProgress[id] ?? defaultLessonProgress();
        if (completed === existing.completed) return s;
        const lesson = getLesson(id);
        const xp = lesson ? lessonTotalXp(lesson) : 0;
        const next = recordStudyDay(s);
        return {
          ...next,
          lessonProgress: {
            ...next.lessonProgress,
            [id]: {
              ...existing,
              completed,
              completedAt: completed ? new Date().toISOString() : undefined,
            },
          },
          activity: completed
            ? prependActivity(next.activity, {
                type: "lesson",
                title: lesson?.title ?? "Lesson",
                detail: `Completed a lesson (+${xp} XP)`,
                xp,
              })
            : next.activity,
        };
      });
      if (completed) {
        const lesson = getLesson(id);
        if (lesson) {
          pushToast({
            type: "xp",
            title: `Lesson completed: ${lesson.title}`,
            detail: `You earned ${lessonTotalXp(lesson)} XP`,
            xp: lessonTotalXp(lesson),
          });
        }
      }
    },
    [mutate, pushToast]
  );

  const setLessonNotes = useCallback(
    (id: string, notes: string) => {
      mutate((s) => {
        const existing = s.lessonProgress[id] ?? defaultLessonProgress();
        const next = notes.trim().length > 0 ? recordStudyDay(s) : s;
        return {
          ...next,
          lessonProgress: {
            ...next.lessonProgress,
            [id]: { ...existing, notes },
          },
        };
      });
    },
    [mutate]
  );

  const toggleCapstoneChecklist = useCallback(
    (id: string, item: string) => {
      mutate((s) => {
        const existing = s.capstoneProgress[id] ?? defaultCapstoneProgress();
        const checklist = { ...existing.checklist, [item]: !existing.checklist[item] };
        const next = recordStudyDay(s);
        return {
          ...next,
          capstoneProgress: {
            ...next.capstoneProgress,
            [id]: { ...existing, checklist },
          },
        };
      });
    },
    [mutate]
  );

  const markCapstoneComplete = useCallback(
    (id: string, completed: boolean) => {
      mutate((s) => {
        const existing = s.capstoneProgress[id] ?? defaultCapstoneProgress();
        if (completed === existing.completed) return s;
        const capstone = getCapstone(id);
        const xp = capstone
          ? CAPSTONE_BASE_XP + DIFFICULTY_META[capstone.difficulty].xp
          : 0;
        const next = recordStudyDay(s);
        return {
          ...next,
          capstoneProgress: {
            ...next.capstoneProgress,
            [id]: {
              ...existing,
              completed,
              completedAt: completed ? new Date().toISOString() : undefined,
            },
          },
          activity: completed
            ? prependActivity(next.activity, {
                type: "project",
                title: capstone?.title ?? "Capstone project",
                detail: `Capstone completed (+${xp} XP)`,
                xp,
              })
            : next.activity,
        };
      });
      if (completed) {
        const capstone = getCapstone(id);
        const xp = capstone
          ? CAPSTONE_BASE_XP + DIFFICULTY_META[capstone.difficulty].xp
          : 0;
        pushToast({
          type: "xp",
          title: `Capstone completed: ${capstone?.title}`,
          detail: `You earned ${xp} XP`,
          xp,
        });
      }
    },
    [mutate, pushToast]
  );

  const setCapstoneNotes = useCallback(
    (id: string, notes: string) => {
      mutate((s) => {
        const existing = s.capstoneProgress[id] ?? defaultCapstoneProgress();
        const next = notes.trim().length > 0 ? recordStudyDay(s) : s;
        return {
          ...next,
          capstoneProgress: {
            ...next.capstoneProgress,
            [id]: { ...existing, notes },
          },
        };
      });
    },
    [mutate]
  );

  const setCapstoneReview = useCallback(
    (id: string, finalReview: string) => {
      mutate((s) => {
        const existing = s.capstoneProgress[id] ?? defaultCapstoneProgress();
        return {
          ...s,
          capstoneProgress: {
            ...s.capstoneProgress,
            [id]: { ...existing, finalReview },
          },
        };
      });
    },
    [mutate]
  );

  const completeOnboarding = useCallback(() => {
    mutate((s) => ({ ...s, onboarded: true }));
  }, [mutate]);

  const resetProgress = useCallback(() => {
    mutate(() => clearState());
  }, [mutate]);

  const restoreState = useCallback((next: AcademyState) => {
    setState(next);
  }, []);

  const notify = useCallback(
    (toast: Omit<Toast, "id">) => {
      pushToast(toast);
    },
    [pushToast]
  );

  const derived = useMemo(() => {
    if (!state) return null;
    const xp = computeXp(state);
    const level = getLevel(xp);
    const levelInfo: LevelInfo = {
      level: level.level,
      title: levelTitle(level.level),
      current: level.current,
      next: level.next,
      into: level.into,
      progress: level.next === 0 ? 0 : (level.current / level.next) * 100,
    };

    const lessons = allLessons();
    const totalLessons = lessons.length;
    let completedLessons = 0;
    let exercisesDone = 0;
    let checklistDone = 0;
    let notesCount = 0;
    let weekLessons = 0;
    const completedIds = new Set<string>();
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

    for (const lesson of lessons) {
      const prog = state.lessonProgress[lesson.id];
      if (!prog) continue;
      if (prog.completed) {
        completedLessons += 1;
        completedIds.add(lesson.id);
        if (prog.completedAt && new Date(prog.completedAt).getTime() > weekAgo) {
          weekLessons += 1;
        }
      }
      const full = lesson.checklist.length;
      const done = lesson.checklist.filter((c) => prog.checklist[c]).length;
      if (full > 0 && done === full) checklistDone += 1;
      exercisesDone += lesson.exercises.filter((_, i) => prog.exercises[i]).length;
      if (prog.notes.trim().length > 0) notesCount += 1;
    }

    const totalCapstones = semesters.length;
    let capstonesCompleted = 0;
    const semestersStatus: SemesterCompletion[] = [];
    for (const semester of semesters) {
      const sl = semesterLessons(semester);
      const lessonsDone = sl.filter((l) => completedIds.has(l.id)).length;
      const capDone = state.capstoneProgress[semester.capstone.id]?.completed ?? false;
      const complete = lessonsDone === sl.length && capDone;
      if (capDone) capstonesCompleted += 1;
      semestersStatus.push({
        semesterId: semester.id,
        number: semester.number,
        title: semester.title,
        lessons: sl.length,
        lessonsDone,
        capstoneDone: capDone,
        complete,
      });
    }

    const overallProgress = totalLessons === 0 ? 0 : (completedLessons / totalLessons) * 100;

    const last7 = new Set<string>();
    for (let i = 0; i < 7; i += 1) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      last7.add(todayKey(d));
    }
    const weekStudyDays = state.studyDays.filter((d) => last7.has(d)).length;

    return {
      xp,
      levelInfo,
      stats: {
        totalLessons,
        completedLessons,
        exercisesDone,
        checklistDone,
        notesCount,
        totalCapstones,
        capstonesCompleted,
        semestersCompleted: semestersStatus.filter((s) => s.complete).length,
        semestersTotal: semesters.length,
        overallProgress,
        weekStudyDays,
        weekLessons,
      },
      streak: computeStreak(state.studyDays),
      recentActivities: state.activity.slice(0, 10),
      semestersStatus,
      unlockedAchievements: state.achievements,
      todayMission: nextLesson(completedIds),
    };
  }, [state]);

  const value: AcademyValue | null = useMemo(() => {
    if (!state || !derived) return null;
    return {
      state,
      hydrated: true,
      toasts,
      dismissToast,
      xp: derived.xp,
      levelInfo: derived.levelInfo,
      stats: derived.stats,
      streak: derived.streak,
      recentActivities: derived.recentActivities,
      semestersStatus: derived.semestersStatus,
      unlockedAchievements: derived.unlockedAchievements,
      todayMission: derived.todayMission,
      getLessonProgress,
      getCapstoneProgress,
      toggleLessonChecklist,
      toggleLessonExercise,
      markLessonComplete,
      setLessonNotes,
      toggleCapstoneChecklist,
      markCapstoneComplete,
      setCapstoneNotes,
      setCapstoneReview,
      completeOnboarding,
      resetProgress,
      restoreState,
      notify,
    };
  }, [
    state,
    derived,
    toasts,
    dismissToast,
    getLessonProgress,
    getCapstoneProgress,
    toggleLessonChecklist,
    toggleLessonExercise,
    markLessonComplete,
    setLessonNotes,
    toggleCapstoneChecklist,
    markCapstoneComplete,
    setCapstoneNotes,
    setCapstoneReview,
    completeOnboarding,
    resetProgress,
    restoreState,
    notify,
  ]);

  if (!value) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  return <AcademyContext.Provider value={value}>{children}</AcademyContext.Provider>;
}

export function useAcademy(): AcademyValue {
  const ctx = useContext(AcademyContext);
  if (!ctx) {
    throw new Error("useAcademy must be used within AcademyProvider");
  }
  return ctx;
}
