import type { Difficulty } from "@/types";

const BASE: Record<Difficulty, number> = {
  beginner: 40,
  intermediate: 60,
  advanced: 80,
  expert: 100,
};

export function lessonBaseXp(difficulty: Difficulty): number {
  return BASE[difficulty];
}

export function lessonTotalXp(lesson: {
  difficulty: Difficulty;
  exercises: unknown[];
}): number {
  return lessonBaseXp(lesson.difficulty) + lesson.exercises.length * 10 + 40;
}

export function capstoneXp(difficulty: Difficulty): number {
  return 300 + BASE[difficulty];
}

export function levelThreshold(level: number): number {
  return 250 * level * (level - 1);
}

export function getLevel(xp: number): { level: number; current: number; next: number; into: number } {
  let level = 1;
  while (levelThreshold(level + 1) <= xp) {
    level += 1;
  }
  const threshold = levelThreshold(level);
  const next = levelThreshold(level + 1);
  return { level, current: xp - threshold, next: next - threshold, into: xp - threshold };
}

export function nextLevelXp(xp: number): number {
  const { next, current } = getLevel(xp);
  return next - current;
}

export const LEVEL_TITLES: Record<number, string> = {
  1: "Initiate",
  2: "Novice",
  3: "Learner",
  4: "Student",
  5: "Practitioner",
  6: "Builder",
  7: "Developer",
  8: "Engineer",
  9: "Advanced Engineer",
  10: "Specialist",
  11: "Expert",
  12: "Master",
  13: "Grandmaster",
};

export function levelTitle(level: number): string {
  if (level <= 13) return LEVEL_TITLES[level];
  if (level <= 20) return "Senior Expert";
  return "Legend";
}
