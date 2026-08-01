import type { Capstone, Lesson, Module, Semester } from "@/types";
import { semester1 } from "./semesters/semester-1";
import { semester2 } from "./semesters/semester-2";
import { semester3 } from "./semesters/semester-3";
import { semester4 } from "./semesters/semester-4";
import { semester5 } from "./semesters/semester-5";
import { semester6 } from "./semesters/semester-6";

export const semesters: Semester[] = [
  semester1,
  semester2,
  semester3,
  semester4,
  semester5,
  semester6,
];

export interface LessonContext {
  semester: Semester;
  module: Module;
  lesson: Lesson;
}

const lessonIndex = new Map<string, LessonContext>();
const semesterIndex = new Map<string, Semester>();
const capstoneIndex = new Map<string, Capstone>();

for (const semester of semesters) {
  semesterIndex.set(semester.id, semester);
  capstoneIndex.set(semester.capstone.id, semester.capstone);
  for (const module of semester.modules) {
    for (const lesson of module.lessons) {
      lessonIndex.set(lesson.id, { semester, module, lesson });
    }
  }
}

export function getSemester(id: string): Semester | undefined {
  return semesterIndex.get(id);
}

export function getLesson(id: string): Lesson | undefined {
  return lessonIndex.get(id)?.lesson;
}

export function getLessonContext(id: string): LessonContext | undefined {
  return lessonIndex.get(id);
}

export function getCapstone(id: string): Capstone | undefined {
  return capstoneIndex.get(id);
}

export function getCapstoneContext(id: string): { semester: Semester; capstone: Capstone } | undefined {
  for (const semester of semesters) {
    if (semester.capstone.id === id) return { semester, capstone: semester.capstone };
  }
  return undefined;
}

export function allLessons(): Lesson[] {
  return semesters.flatMap((s) => s.modules.flatMap((m) => m.lessons));
}

export function allCapstones(): Capstone[] {
  return semesters.map((s) => s.capstone);
}

export function lessonCount(): number {
  return allLessons().length;
}

export function techToLessons(): Record<string, Lesson[]> {
  const map: Record<string, Lesson[]> = {};
  for (const lesson of allLessons()) {
    for (const tech of lesson.technologies) {
      (map[tech] ??= []).push(lesson);
    }
  }
  return map;
}

export function nextLesson(completedIds: Set<string>): Lesson | undefined {
  for (const semester of semesters) {
    for (const module of semester.modules) {
      for (const lesson of module.lessons) {
        if (!completedIds.has(lesson.id)) return lesson;
      }
    }
  }
  return undefined;
}

export function semesterLessons(semester: Semester): Lesson[] {
  return semester.modules.flatMap((m) => m.lessons);
}

export function nextLessonInSemester(semester: Semester, completedIds: Set<string>): Lesson | undefined {
  for (const module of semester.modules) {
    for (const lesson of module.lessons) {
      if (!completedIds.has(lesson.id)) return lesson;
    }
  }
  return undefined;
}

export function prevLesson(id: string): Lesson | undefined {
  const lessons = allLessons();
  const idx = lessons.findIndex((l) => l.id === id);
  return idx > 0 ? lessons[idx - 1] : undefined;
}

export function nextLessonInSequence(id: string): Lesson | undefined {
  const lessons = allLessons();
  const idx = lessons.findIndex((l) => l.id === id);
  return idx >= 0 && idx < lessons.length - 1 ? lessons[idx + 1] : undefined;
}

export function orderedLessons(): Lesson[] {
  return allLessons();
}
