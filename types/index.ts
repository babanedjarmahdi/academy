import type { LucideIcon } from "lucide-react";

export type Difficulty = "beginner" | "intermediate" | "advanced" | "expert";

export interface ResourceLink {
  label: string;
  url: string;
}

export interface MiniProject {
  title: string;
  description: string;
  checklist: string[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  durationMinutes: number;
  difficulty: Difficulty;
  prerequisites: string[];
  technologies: string[];
  whyLearn: string;
  useCases: string[];
  commonMistakes: string[];
  officialDocs: ResourceLink[];
  youtubeVideo: ResourceLink;
  readings: ResourceLink[];
  resources: ResourceLink[];
  exercises: string[];
  miniProject: MiniProject;
  checklist: string[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  lessons: Lesson[];
}

export interface Capstone {
  id: string;
  title: string;
  description: string;
  objectives: string[];
  requiredSkills: string[];
  difficulty: Difficulty;
  estimatedHours: number;
  xp: number;
  checklist: string[];
  technologies: string[];
}

export interface Semester {
  id: string;
  number: number;
  title: string;
  description: string;
  tagline: string;
  icon: LucideIcon;
  color: string;
  duration: string;
  xp: number;
  modules: Module[];
  capstone: Capstone;
}

export interface LessonProgress {
  completed: boolean;
  completedAt?: string;
  checklist: Record<string, boolean>;
  exercises: Record<string, boolean>;
  notes: string;
}

export interface CapstoneProgress {
  completed: boolean;
  completedAt?: string;
  checklist: Record<string, boolean>;
  notes: string;
  finalReview: string;
}

export type ActivityType =
  | "lesson"
  | "exercise"
  | "project"
  | "semester"
  | "achievement"
  | "streak";

export interface ActivityEntry {
  id: string;
  type: ActivityType;
  title: string;
  detail?: string;
  xp?: number;
  at: string;
}

export interface AcademyState {
  version: number;
  updatedAt: string;
  lessonProgress: Record<string, LessonProgress>;
  capstoneProgress: Record<string, CapstoneProgress>;
  activity: ActivityEntry[];
  studyDays: string[];
  achievements: string[];
  onboarded: boolean;
}
