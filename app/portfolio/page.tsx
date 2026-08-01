"use client";

import Link from "next/link";
import {
  Award,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  FolderGit2,
  Rocket,
} from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { StatCard } from "@/components/shared/stat-card";
import { semesters } from "@/data";
import { useAcademy } from "@/context/academy-provider";
import { DifficultyBadge } from "@/components/shared/difficulty-badge";
import { TechBadge } from "@/components/shared/tech-badge";

export default function PortfolioPage() {
  const { getCapstoneProgress, stats, xp, levelInfo, unlockedAchievements } = useAcademy();
  const completed = semesters.filter((s) => getCapstoneProgress(s.capstone.id).completed);

  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          icon={Briefcase}
          title="Portfolio"
          description="Every completed capstone is showcased here as a portfolio project — a live demonstration of your skills as an AI automation engineer."
        />

        <section className="grid gap-4 sm:grid-cols-3">
          <StatCard
            label="Projects shipped"
            value={completed.length}
            sub="of 6 capstones"
            icon={FolderGit2}
            accent="text-accent"
          />
          <StatCard
            label="Total XP"
            value={xp.toLocaleString()}
            sub={`Level ${levelInfo.level} · ${levelInfo.title}`}
            icon={Award}
            accent="text-primary"
          />
          <StatCard
            label="Semesters done"
            value={stats.semestersCompleted}
            sub={`${stats.completedLessons} lessons completed`}
            icon={CheckCircle2}
            accent="text-accent"
          />
        </section>

        {completed.length === 0 ? (
          <EmptyState
            icon={Rocket}
            title="No projects yet"
            description="Complete your first capstone project and it will appear here as a portfolio piece."
            action={
              <Link
                href="/projects"
                className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Browse projects
              </Link>
            }
          />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {completed.map((semester) => {
              const capstone = semester.capstone;
              const prog = getCapstoneProgress(capstone.id);
              const review = prog.finalReview.trim();
              return (
                <article
                  key={capstone.id}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${semester.color}1e`,
                        color: semester.color,
                      }}
                    >
                      <Rocket className="h-5 w-5" />
                    </div>
                    <span className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      Semester {semester.number}
                    </span>
                  </div>
                  <h2 className="mt-4 text-base font-bold leading-snug">{capstone.title}</h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">{capstone.description}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    <DifficultyBadge difficulty={capstone.difficulty} />
                    {capstone.technologies.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>
                  {review ? (
                    <div className="mt-4 rounded-lg border border-border bg-secondary/20 p-3.5">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        My review
                      </p>
                      <p className="text-sm leading-relaxed text-foreground/90">{review}</p>
                    </div>
                  ) : null}
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">
                      {capstone.xp} XP earned
                    </span>
                    <Link
                      href={`/projects/${capstone.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      View project
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {unlockedAchievements.length > 0 ? (
          <p className="text-center text-xs text-muted-foreground">
            {unlockedAchievements.length} achievements unlocked across your journey
          </p>
        ) : null}
      </div>
    </AppShell>
  );
}
