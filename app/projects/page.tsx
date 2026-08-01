"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, FolderGit2, PlayCircle, Rocket } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/shared/page-header";
import { semesters } from "@/data";
import { useAcademy } from "@/context/academy-provider";
import { capstoneHref } from "@/lib/routes";
import { DifficultyBadge } from "@/components/shared/difficulty-badge";
import { TechBadge } from "@/components/shared/tech-badge";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const { getCapstoneProgress, semestersStatus } = useAcademy();

  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          icon={FolderGit2}
          title="Projects"
          description="Six capstone projects that build your portfolio as an AI automation engineer. Each one is designed to demonstrate real, hireable skills."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {semesters.map((semester, index) => {
            const capstone = semester.capstone;
            const prog = getCapstoneProgress(capstone.id);
            const status = semestersStatus.find((s) => s.semesterId === semester.id);
            const ready = status?.complete;
            const checklistDone = capstone.checklist.filter((c) => prog.checklist[c]).length;

            return (
              <motion.div
                key={capstone.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={capstoneHref(semester)}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${semester.color}1e`,
                        color: semester.color,
                      }}
                    >
                      <Rocket className="h-5 w-5" />
                    </div>
                    {prog.completed ? (
                      <span className="flex items-center gap-1 rounded-md border border-accent/25 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Completed
                      </span>
                    ) : (
                      <span className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                        S{index + 1}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-4 text-base font-bold leading-snug group-hover:text-primary">
                    {capstone.title}
                  </h2>
                  <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-muted-foreground">
                    {capstone.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    <DifficultyBadge difficulty={capstone.difficulty} />
                    {capstone.technologies.slice(0, 3).map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-3 border-t border-border pt-3.5 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      ~{capstone.estimatedHours}h
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <PlayCircle className="h-3.5 w-3.5" />
                      {capstone.xp} XP
                    </span>
                    <span
                      className={cn(
                        "ml-auto inline-flex items-center gap-1 text-xs font-medium",
                        prog.completed ? "text-accent" : "text-primary"
                      )}
                    >
                      {checklistDone > 0
                        ? `Checklist ${checklistDone}/${capstone.checklist.length}`
                        : ready
                          ? "Ready — start it"
                          : "In progress"}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
