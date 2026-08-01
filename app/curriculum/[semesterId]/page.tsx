"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  CheckCircle2,
  ChevronLeft,
  CircleDot,
  GraduationCap,
  ListChecks,
  PlayCircle,
  Rocket,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import { AppShell } from "@/components/layout/app-shell";
import { getSemester, semesterLessons } from "@/data";
import { useAcademy } from "@/context/academy-provider";
import { lessonHref, capstoneHref } from "@/lib/routes";
import { DifficultyBadge } from "@/components/shared/difficulty-badge";
import { TechBadge } from "@/components/shared/tech-badge";
import { formatDuration } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function SemesterPage() {
  const params = useParams<{ semesterId: string }>();
  const semester = getSemester(params.semesterId);
  const { getLessonProgress, getCapstoneProgress } = useAcademy();

  if (!semester) notFound();

  const lessons = semesterLessons(semester);
  const totalMinutes = lessons.reduce((n, l) => n + l.durationMinutes, 0);
  const doneLessons = lessons.filter((l) => getLessonProgress(l.id).completed);
  const capstoneProg = getCapstoneProgress(semester.capstone.id);
  const allDone = doneLessons.length === lessons.length;
  const pct = lessons.length === 0 ? 0 : Math.round((doneLessons.length / lessons.length) * 100);

  return (
    <AppShell>
      <div className="space-y-8">
        <Link
          href="/curriculum"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Curriculum
        </Link>

        <section className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              background: `radial-gradient(ellipse 50% 80% at 10% 0%, ${semester.color}, transparent 70%)`,
            }}
          />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${semester.color}1e`, color: semester.color }}
              >
                <semester.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Semester {semester.number} &middot; {semester.duration}
                </p>
                <h1 className="mt-0.5 text-2xl font-bold tracking-tight sm:text-3xl">
                  {semester.title}
                </h1>
              </div>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {semester.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="h-3.5 w-3.5" />
                {semester.modules.length} modules · {lessons.length} lessons
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ListChecks className="h-3.5 w-3.5" />
                {formatDuration(totalMinutes)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Target className="h-3.5 w-3.5" />
                Capstone: {semester.capstone.title}
              </span>
            </div>
            <div className="mt-5 max-w-md">
              <div className="mb-1.5 flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {doneLessons.length}/{lessons.length} lessons complete
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
        </section>

        <div className="space-y-10">
          {semester.modules.map((module, mIndex) => (
            <section key={module.id}>
              <div className="mb-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary text-xs font-bold text-primary">
                    {mIndex + 1}
                  </span>
                  <h2 className="text-lg font-bold tracking-tight">{module.title}</h2>
                </div>
                <p className="ml-11 mt-1 text-sm text-muted-foreground">
                  {module.description}
                </p>
                {module.technologies.length > 0 ? (
                  <div className="ml-11 mt-2 flex flex-wrap gap-1.5">
                    {module.technologies.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="ml-0 sm:ml-11">
                <ol className="space-y-2 border-l border-border pl-0 sm:pl-4">
                  {module.lessons.map((lesson, lIndex) => {
                    const prog = getLessonProgress(lesson.id);
                    const isFirst = mIndex === 0 && lIndex === 0;
                    return (
                      <motion.li
                        key={lesson.id}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: lIndex * 0.04 }}
                      >
                        <Link
                          href={lessonHref(semester, module, lesson)}
                          className="group relative flex items-center gap-3 rounded-lg border border-border bg-card p-3.5 transition-colors hover:border-primary/40 hover:bg-secondary/30"
                        >
                          <span
                            className={cn(
                              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border",
                              prog.completed
                                ? "border-accent/40 bg-accent/15 text-accent"
                                : "border-border bg-secondary text-muted-foreground"
                            )}
                          >
                            {prog.completed ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : (
                              <CircleDot className="h-4 w-4" />
                            )}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p
                              className={cn(
                                "truncate text-sm font-medium",
                                prog.completed && "text-muted-foreground line-through decoration-muted-foreground/50"
                              )}
                            >
                              {lesson.title}
                            </p>
                            <p className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                              <span>{formatDuration(lesson.durationMinutes)}</span>
                              <DifficultyBadge difficulty={lesson.difficulty} />
                              {isFirst ? (
                                <span className="rounded bg-primary/10 px-1.5 py-0.5 font-semibold text-primary">
                                  Start here
                                </span>
                              ) : null}
                            </p>
                          </div>
                          <PlayCircle className="h-4 w-4 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                        </Link>
                      </motion.li>
                    );
                  })}
                </ol>
              </div>
            </section>
          ))}
        </div>

        <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Rocket className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Capstone Project
                </p>
                <h2 className="mt-0.5 text-xl font-bold tracking-tight">
                  {semester.capstone.title}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {semester.capstone.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <DifficultyBadge difficulty={semester.capstone.difficulty} />
                  {semester.capstone.technologies.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <Link
                href={capstoneHref(semester)}
                className={cn(
                  "inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all",
                  capstoneProg.completed
                    ? "border border-border bg-secondary text-foreground hover:bg-secondary/70"
                    : allDone
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                {capstoneProg.completed ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" /> Revisit project
                  </>
                ) : allDone ? (
                  <>
                    <PlayCircle className="h-4 w-4" /> Start capstone
                  </>
                ) : (
                  <>
                    <ListChecks className="h-4 w-4" /> View project
                  </>
                )}
              </Link>
              <span className="text-xs text-muted-foreground">
                Est. {semester.capstone.estimatedHours} hours · {semester.capstone.xp} XP
              </span>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
