import type { Difficulty } from "@/types";

export const APP_NAME = "Nexus";
export const APP_TAGLINE = "AI Automation Engineering Academy";
export const STORAGE_KEY = "ai-automation-academy:v1";

export const STORAGE_VERSION = 1;

export const DIFFICULTY_META: Record<
  Difficulty,
  { label: string; color: string; xp: number; className: string }
> = {
  beginner: {
    label: "Beginner",
    color: "#22C55E",
    xp: 40,
    className: "bg-accent/15 text-accent border-accent/25",
  },
  intermediate: {
    label: "Intermediate",
    color: "#3B82F6",
    xp: 60,
    className: "bg-primary/15 text-primary border-primary/25",
  },
  advanced: {
    label: "Advanced",
    color: "#F59E0B",
    xp: 80,
    className: "bg-amber-500/15 text-amber-400 border-amber-500/25",
  },
  expert: {
    label: "Expert",
    color: "#EF4444",
    xp: 100,
    className: "bg-red-500/15 text-red-400 border-red-500/25",
  },
};

export const EXERCISE_XP = 10;
export const MINI_PROJECT_XP = 40;
export const CAPSTONE_BASE_XP = 300;
export const SEMESTER_BONUS_XP = 250;

export const TECH_COLORS: Record<string, string> = {
  javascript: "#F7DF1E",
  typescript: "#3178C6",
  git: "#F05032",
  github: "#FFFFFF",
  linux: "#FCC624",
  docker: "#2496ED",
  http: "#3B82F6",
  "rest-api": "#8B5CF6",
  python: "#3776AB",
  fastapi: "#009688",
  postgresql: "#4169E1",
  redis: "#DC382D",
  react: "#61DAFB",
  nextjs: "#FFFFFF",
  tailwind: "#38BDF8",
  shadcn: "#18181B",
  openai: "#10A37F",
  gemini: "#4285F4",
  claude: "#D97757",
  prompting: "#F59E0B",
  embeddings: "#A855F7",
  rag: "#EC4899",
  mcp: "#0EA5E9",
  langchain: "#1C3C3C",
  langgraph: "#6EE7B7",
  n8n: "#EA4B71",
  qdrant: "#DD0031",
  pgvector: "#34A0A4",
  oauth: "#84CC16",
  jwt: "#E11D48",
  "system-design": "#EAB308",
  architecture: "#64748B",
  monitoring: "#22D3EE",
  cicd: "#14B8A6",
  deployment: "#F97316",
};

export const TECH_NAMES: Record<string, string> = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  git: "Git",
  github: "GitHub",
  linux: "Linux",
  docker: "Docker",
  http: "HTTP",
  "rest-api": "REST APIs",
  python: "Python",
  fastapi: "FastAPI",
  postgresql: "PostgreSQL",
  redis: "Redis",
  react: "React",
  nextjs: "Next.js",
  tailwind: "Tailwind CSS",
  shadcn: "shadcn/ui",
  openai: "OpenAI",
  gemini: "Gemini",
  claude: "Claude",
  prompting: "Prompt Engineering",
  embeddings: "Embeddings",
  rag: "RAG",
  mcp: "MCP",
  langchain: "LangChain",
  langgraph: "LangGraph",
  n8n: "n8n",
  qdrant: "Qdrant",
  pgvector: "pgvector",
  oauth: "OAuth",
  jwt: "JWT",
  "system-design": "System Design",
  architecture: "Architecture",
  monitoring: "Monitoring",
  cicd: "CI/CD",
  deployment: "Deployment",
};

export const NAV_ITEMS = [
  { label: "Dashboard", href: "/", shortcut: "g d", keys: ["d"] },
  { label: "Curriculum", href: "/curriculum", shortcut: "g c", keys: ["c"] },
  { label: "Projects", href: "/projects", shortcut: "g p", keys: ["p"] },
  { label: "Portfolio", href: "/portfolio", shortcut: "g f", keys: ["f"] },
  { label: "Achievements", href: "/achievements", shortcut: "g a", keys: ["a"] },
  { label: "Notes", href: "/notes", shortcut: "g n", keys: ["n"] },
];

export const WEEK_DAYS = ["S", "M", "T", "W", "T", "F", "S"];
