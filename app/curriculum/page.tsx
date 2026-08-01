"use client";

import Link from "next/link";
import { CheckCircle2, GraduationCap, Lock, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/shared/page-header";
import { semesters, semesterLessons } from "@/data";
import { useAcademy } from "@/context/academy-provider";
import { formatDuration } from "@/lib/utils";
export default function CurriculumPage() {
  const { semestersStatus, getLessonProgress } = useAcademy();

  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          title="Curriculum"
          description="Six semesters that take you from zero to expert in AI automation engineering. Every semester ends with a capstone project for your portfolio."
        />

        <div className="space-y-6">
          {semesters.map((semester, index) => {
            const status = semestersStatus.find((s) => s.semesterId === semester.id);
            const lessons = semesterLessons(semester);
            const done = status?.lessonsDone ?? 0;
            const pct = lessons.length === 0 ? 0 : Math.round((done / lessons.length) * 100);
            const firstIncomplete = lessons.find(
              (l) => !getLessonProgress(l.id).completed
            );

            return (
              <motion.div
                key={semester.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/curriculum/${semester.id}`}
                  className="group block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
                >
                  <div className="flex flex-wrap items-center gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${semester.color}1e`,
                        color: semester.color,
                      }}
                    >
                      <semester.icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                          Semester {semester.number}
                        </span>
                        {status?.complete ? (
                          <span className="flex items-center gap-1 text-xs font-medium text-accent">
                            <CheckCircle2 className="h-3.5 w-3.5" /> Complete
                          </span>
                        ) : null}
                        <span className="text-xs text-muted-foreground">
                          {semester.duration}
                        </span>
                      </div>
                      <h2 className="mt-1.5 text-lg font-bold tracking-tight group-hover:text-primary">
                        {semester.title}
                      </h2>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {semester.description}
                      </p>
                    </div>
                    <div className="w-full sm:w-48">
                      <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground">
                        <span>
                          {done}/{lessons.length} lessons
                        </span>
                        <span>{pct}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{ width: `${pct}%`, backgroundColor: semester.color }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-border pt-4">
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <GraduationCap className="h-3.5 w-3.5" />
                      {semester.modules.length} modules
                    </span>
                    <span className="text-xs text-muted-foreground">
                      &middot; {formatDuration(
                        lessons.reduce((n, l) => n + l.durationMinutes, 0)
                      )}{" "}
                      total
                    </span>
                    <span className="text-xs text-muted-foreground">
                      &middot; Capstone: {semester.capstone.title}
                    </span>
                    <span className="ml-auto flex items-center gap-1 text-xs font-medium text-primary">
                      {status?.capstoneDone ? (
                        <>
                          <Lock className="h-3.5 w-3.5" />
                          Revisit
                        </>
                      ) : pct === 100 ? (
                        <>
                          <PlayCircle className="h-3.5 w-3.5" />
                          Start capstone
                        </>
                      ) : firstIncomplete ? (
                        <>
                          <PlayCircle className="h-3.5 w-3.5" />
                          Continue
                        </>
                      ) : (
                        <>
                          <Lock className="h-3.5 w-3.5" />
                          Open
                        </>
                      )}
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
