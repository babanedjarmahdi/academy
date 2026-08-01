import {
  Award,
  Braces,
  Cable,
  CalendarCheck,
  CheckSquare,
  Container,
  Crown,
  Database,
  Dumbbell,
  FolderGit2,
  GitBranch,
  GraduationCap,
  Layers,
  Medal,
  NotebookPen,
  Plug,
  Rocket,
  Star,
  Terminal,
  Trophy,
  Workflow,
  Wrench,
  Zap,
  Bot,
  Atom,
  type LucideIcon,
} from "lucide-react";
import type { AcademyState } from "@/types";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  reward: number;
  hidden?: boolean;
}

export interface AchievementContext {
  state: AcademyState;
  xp: number;
  lessonsCompleted: number;
  exercisesDone: number;
  checklistDone: number;
  notesCount: number;
  capstonesCompleted: number;
  semestersCompleted: number;
  streak: number;
  lessonCount: number;
  techCompleted: Record<string, boolean>;
  weekStudyDays: number;
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: "first-lesson", title: "First Step", description: "Complete your first lesson.", icon: Rocket, reward: 25 },
  { id: "xp-100", title: "Warming Up", description: "Reach 100 total XP.", icon: Star, reward: 25 },
  { id: "xp-500", title: "On a Roll", description: "Reach 500 total XP.", icon: Zap, reward: 50 },
  { id: "xp-1000", title: "Century Club", description: "Reach 1,000 total XP.", icon: Medal, reward: 100 },
  { id: "xp-5000", title: "Powerhouse", description: "Reach 5,000 total XP.", icon: Crown, reward: 250 },
  { id: "xp-10000", title: "Academy Legend", description: "Reach 10,000 total XP.", icon: Trophy, reward: 500 },
  { id: "js-master", title: "JavaScript Master", description: "Complete every JavaScript lesson.", icon: Braces, reward: 100 },
  { id: "ts-engineer", title: "TypeScript Engineer", description: "Complete every TypeScript lesson.", icon: Braces, reward: 100 },
  { id: "git-pro", title: "Git Pro", description: "Complete every Git & GitHub lesson.", icon: GitBranch, reward: 100 },
  { id: "linux-commander", title: "Linux Commander", description: "Complete every Linux lesson.", icon: Terminal, reward: 100 },
  { id: "http-expert", title: "HTTP Expert", description: "Complete every HTTP & REST API lesson.", icon: Cable, reward: 100 },
  { id: "python-builder", title: "Python Builder", description: "Complete every Python lesson.", icon: Braces, reward: 100 },
  { id: "fastapi-engineer", title: "FastAPI Engineer", description: "Complete every FastAPI lesson.", icon: Zap, reward: 100 },
  { id: "docker-beginner", title: "Docker Beginner", description: "Complete every Docker lesson.", icon: Container, reward: 100 },
  { id: "react-builder", title: "React Builder", description: "Complete every React & Next.js lesson.", icon: Atom, reward: 100 },
  { id: "ai-engineer", title: "AI Engineer", description: "Complete every OpenAI, Gemini and Claude lesson.", icon: Bot, reward: 150 },
  { id: "rag-builder", title: "RAG Builder", description: "Complete every Embeddings and RAG lesson.", icon: Database, reward: 150 },
  { id: "mcper", title: "MCP Explorer", description: "Complete every MCP lesson.", icon: Plug, reward: 150 },
  { id: "agent-engineer", title: "Agent Engineer", description: "Complete every agent and LangGraph lesson.", icon: Workflow, reward: 200 },
  { id: "automation-engineer", title: "Automation Engineer", description: "Complete every n8n automation lesson.", icon: Workflow, reward: 150 },
  { id: "first-project", title: "Project Completed", description: "Finish your first capstone project.", icon: Wrench, reward: 150 },
  { id: "three-projects", title: "Portfolio Builder", description: "Complete three capstone projects.", icon: FolderGit2, reward: 300 },
  { id: "semester-one", title: "Foundations Done", description: "Complete Semester 1.", icon: GraduationCap, reward: 150 },
  { id: "full-stack", title: "Full Stack", description: "Complete three full semesters.", icon: Layers, reward: 400 },
  { id: "graduate", title: "Graduate", description: "Complete all six semesters.", icon: Award, reward: 1000 },
  { id: "streak-3", title: "Momentum", description: "Reach a 3-day study streak.", icon: Star, reward: 50 },
  { id: "streak-7", title: "Weekly Warrior", description: "Reach a 7-day study streak.", icon: CalendarCheck, reward: 100 },
  { id: "streak-30", title: "Monthly Marathon", description: "Reach a 30-day study streak.", icon: CalendarCheck, reward: 250 },
  { id: "streak-100", title: "Century Streak", description: "Reach a 100-day study streak.", icon: Trophy, reward: 500 },
  { id: "note-taker", title: "Notebook", description: "Write notes in at least 5 lessons.", icon: NotebookPen, reward: 50 },
  { id: "checklist-pro", title: "Checklist Pro", description: "Fully check off 20 lesson checklists.", icon: CheckSquare, reward: 100 },
  { id: "exercise-whiz", title: "Exercise Whiz", description: "Complete 25 exercises.", icon: Dumbbell, reward: 100 },
  { id: "studious", title: "Studious", description: "Study on 7 days within one week.", icon: CalendarCheck, reward: 50 },
];

export function achievementById(id: string): Achievement | undefined {
  return ACHIEVEMENTS.find((a) => a.id === id);
}

const TECH_ACHIEVEMENT_MAP: Record<string, string> = {
  javascript: "js-master",
  typescript: "ts-engineer",
  git: "git-pro",
  github: "git-pro",
  linux: "linux-commander",
  http: "http-expert",
  "rest-api": "http-expert",
  python: "python-builder",
  fastapi: "fastapi-engineer",
  docker: "docker-beginner",
  react: "react-builder",
  nextjs: "react-builder",
  openai: "ai-engineer",
  gemini: "ai-engineer",
  claude: "ai-engineer",
  embeddings: "rag-builder",
  rag: "rag-builder",
  mcp: "mcper",
  langgraph: "agent-engineer",
  agents: "agent-engineer",
  n8n: "automation-engineer",
};

export function isAchievementUnlocked(id: string, ctx: AchievementContext): boolean {
  switch (id) {
    case "first-lesson":
      return ctx.lessonsCompleted >= 1;
    case "xp-100":
      return ctx.xp >= 100;
    case "xp-500":
      return ctx.xp >= 500;
    case "xp-1000":
      return ctx.xp >= 1000;
    case "xp-5000":
      return ctx.xp >= 5000;
    case "xp-10000":
      return ctx.xp >= 10000;
    case "first-project":
      return ctx.capstonesCompleted >= 1;
    case "three-projects":
      return ctx.capstonesCompleted >= 3;
    case "semester-one":
      return ctx.semestersCompleted >= 1;
    case "full-stack":
      return ctx.semestersCompleted >= 3;
    case "graduate":
      return ctx.semestersCompleted >= 6;
    case "streak-3":
      return ctx.streak >= 3;
    case "streak-7":
      return ctx.streak >= 7;
    case "streak-30":
      return ctx.streak >= 30;
    case "streak-100":
      return ctx.streak >= 100;
    case "note-taker":
      return ctx.notesCount >= 5;
    case "checklist-pro":
      return ctx.checklistDone >= 20;
    case "exercise-whiz":
      return ctx.exercisesDone >= 25;
    case "studious":
      return ctx.weekStudyDays >= 7;
    default: {
      if (id in TECH_ACHIEVEMENT_MAP && !(id in TECH_ACHIEVEMENT_MAP)) {
        return false;
      }
      const techIds = Object.entries(TECH_ACHIEVEMENT_MAP)
        .filter(([, aid]) => aid === id)
        .map(([tech]) => tech);
      if (techIds.length > 0) {
        return techIds.every((tech) => ctx.techCompleted[tech]);
      }
      return false;
    }
  }
}

export function isTechAchievement(id: string): boolean {
  return Object.values(TECH_ACHIEVEMENT_MAP).includes(id);
}
