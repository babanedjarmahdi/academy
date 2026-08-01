"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, SearchX } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/shared/page-header";
import { allLessons, allCapstones, semesters, getLessonContext, getCapstoneContext } from "@/data";
import { useAcademy } from "@/context/academy-provider";
import { lessonHref, capstoneHref } from "@/lib/routes";
import { DifficultyBadge } from "@/components/shared/difficulty-badge";
import { TechBadge } from "@/components/shared/tech-badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState<string>("all");
  const [tech, setTech] = useState<string>("all");
  const { getLessonProgress, getCapstoneProgress } = useAcademy();

  const allTech = useMemo(() => {
    const set = new Set<string>();
    allLessons().forEach((l) => l.technologies.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const lessonResults = allLessons()
      .filter((lesson) => {
        if (difficulty !== "all" && lesson.difficulty !== difficulty) return false;
        if (tech !== "all" && !lesson.technologies.includes(tech)) return false;
        if (!q) return true;
        const haystack = [
          lesson.title,
          lesson.description,
          lesson.whyLearn,
          ...lesson.objectives,
          ...lesson.useCases,
          ...lesson.technologies,
          ...lesson.checklist,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      })
      .map((lesson) => {
        const ctx = getLessonContext(lesson.id)!;
        return {
          kind: "lesson" as const,
          id: lesson.id,
          title: lesson.title,
          description: lesson.description,
          difficulty: lesson.difficulty,
          technologies: lesson.technologies,
          href: lessonHref(ctx.semester, ctx.module, ctx.lesson),
          semester: ctx.semester.number,
          completed: getLessonProgress(lesson.id).completed,
        };
      });

    const capstoneResults = allCapstones()
      .filter((capstone) => {
        if (difficulty !== "all" && capstone.difficulty !== difficulty) return false;
        if (tech !== "all" && !capstone.technologies.includes(tech)) return false;
        if (!q) return true;
        const haystack = [
          capstone.title,
          capstone.description,
          ...capstone.objectives,
          ...capstone.technologies,
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      })
      .map((capstone) => {
        const ctx = getCapstoneContext(capstone.id)!;
        return {
          kind: "capstone" as const,
          id: capstone.id,
          title: capstone.title,
          description: capstone.description,
          difficulty: capstone.difficulty,
          technologies: capstone.technologies,
          href: capstoneHref(ctx.semester),
          semester: ctx.semester.number,
          completed: getCapstoneProgress(capstone.id).completed,
        };
      });

    return [...lessonResults, ...capstoneResults];
  }, [query, difficulty, tech, getLessonProgress, getCapstoneProgress]);

  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          icon={Search}
          title="Search"
          description="Search the entire curriculum — lessons, projects, topics, and skills."
        />

        <div className="flex flex-col gap-3">
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try “RAG”, “Docker”, “agents”, “API security”…"
            className="h-11 text-base"
          />
          <div className="flex flex-wrap items-center gap-2">
            <FilterPills
              options={[
                { value: "all", label: "All levels" },
                { value: "beginner", label: "Beginner" },
                { value: "intermediate", label: "Intermediate" },
                { value: "advanced", label: "Advanced" },
                { value: "expert", label: "Expert" },
              ]}
              value={difficulty}
              onChange={setDifficulty}
            />
            <select
              value={tech}
              onChange={(e) => setTech(e.target.value)}
              className="h-8 rounded-md border border-border bg-secondary/40 px-2 text-xs text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
            >
              <option value="all">All technologies</option>
              {allTech.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm text-muted-foreground">
            {results.length} result{results.length === 1 ? "" : "s"}
            {query ? ` for “${query}”` : ""}
          </p>

          {results.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/40 px-6 py-16 text-center">
              <SearchX className="h-8 w-8 text-muted-foreground" />
              <h3 className="mt-3 text-sm font-semibold">No results</h3>
              <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                Try a different keyword, or clear the filters to browse the full curriculum.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {results.map((r) => (
                <Link
                  key={r.id}
                  href={r.href}
                  className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 sm:flex-row sm:items-center"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={cn(
                          "rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                          r.kind === "capstone"
                            ? "bg-accent/15 text-accent"
                            : "bg-primary/10 text-primary"
                        )}
                      >
                        {r.kind === "capstone" ? "Project" : `S${r.semester}`}
                      </span>
                      <h3 className="truncate text-sm font-semibold group-hover:text-primary">
                        {r.title}
                      </h3>
                      {r.completed ? (
                        <span className="text-[10px] font-medium text-accent">Completed</span>
                      ) : null}
                    </div>
                    <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                      {r.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap items-center gap-1.5">
                    <DifficultyBadge difficulty={r.difficulty} />
                    {r.technologies.slice(0, 2).map((t) => (
                      <TechBadge key={t} tech={t} />
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <p className="text-center text-xs text-muted-foreground">
          {semesters.length} semesters · {allLessons().length} lessons ·{" "}
          {allCapstones().length} projects
        </p>
      </div>
    </AppShell>
  );
}

function FilterPills({
  options,
  value,
  onChange,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            "rounded-md border px-2.5 py-1 text-xs font-medium transition-colors",
            value === opt.value
              ? "border-primary/40 bg-primary/10 text-primary"
              : "border-border bg-secondary/40 text-muted-foreground hover:bg-secondary"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
