"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CircleDashed,
  ExternalLink,
  Flag,
  GraduationCap,
  Lightbulb,
  ListChecks,
  NotebookPen,
  Play,
  Target,
  Wrench,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";
import { AppShell } from "@/components/layout/app-shell";
import { getSemester, prevLesson, nextLessonInSequence, getLessonContext } from "@/data";
import { useAcademy } from "@/context/academy-provider";
import { lessonHref } from "@/lib/routes";
import { DifficultyBadge } from "@/components/shared/difficulty-badge";
import { TechBadge } from "@/components/shared/tech-badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { EXERCISE_XP, MINI_PROJECT_XP } from "@/lib/constants";
import { lessonTotalXp, lessonBaseXp } from "@/lib/xp";
import { formatDuration, formatRelative } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function LessonPage() {
  const params = useParams<{ semesterId: string; moduleId: string; lessonId: string }>();
  const semester = getSemester(params.semesterId);
  const { getLessonProgress, toggleLessonChecklist, toggleLessonExercise, markLessonComplete, setLessonNotes } =
    useAcademy();

  if (!semester) notFound();
  const mod = semester.modules.find((m) => m.id === params.moduleId);
  if (!mod) notFound();
  const lesson = mod.lessons.find((l) => l.id === params.lessonId);
  if (!lesson) notFound();

  const prog = getLessonProgress(lesson.id);
  const totalXp = lessonTotalXp(lesson);
  const checklistDone = lesson.checklist.filter((c) => prog.checklist[c]).length;
  const exercisesDone = lesson.exercises.filter((_, i) => prog.exercises[i]).length;
  const prev = prevLesson(lesson.id);
  const next = nextLessonInSequence(lesson.id);

  return (
    <AppShell>
      <div className="mx-auto max-w-4xl space-y-8">
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link href="/curriculum" className="hover:text-foreground">
            Curriculum
          </Link>
          <span>/</span>
          <Link href={`/curriculum/${semester.id}`} className="hover:text-foreground">
            {semester.title}
          </Link>
          <span>/</span>
          <Link
            href={`/curriculum/${semester.id}#${mod.id}`}
            className="hover:text-foreground"
          >
            {mod.title}
          </Link>
        </nav>

        <header className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <DifficultyBadge difficulty={lesson.difficulty} />
            {lesson.technologies.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
          <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {lesson.title}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {lesson.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Play className="h-3.5 w-3.5" />
              {formatDuration(lesson.durationMinutes)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Flag className="h-3.5 w-3.5" />
              {totalXp} XP
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ListChecks className="h-3.5 w-3.5" />
              {checklistDone}/{lesson.checklist.length} checklist
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CircleDashed className="h-3.5 w-3.5" />
              {exercisesDone}/{lesson.exercises.length} exercises
            </span>
          </div>

          {prog.completed ? (
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-accent/25 bg-accent/10 px-3 py-2 text-sm text-accent">
              <CheckCircle2 className="h-4 w-4" />
              Completed{prog.completedAt ? ` · ${formatRelative(prog.completedAt)}` : ""} — you
              earned {totalXp} XP
            </div>
          ) : null}
        </header>

        <Section icon={Lightbulb} title="Why learn this?">
          <p className="text-sm leading-relaxed text-muted-foreground">{lesson.whyLearn}</p>
        </Section>

        <Section icon={Target} title="What you'll be able to do">
          <ul className="space-y-2">
            {lesson.objectives.map((o, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </Section>

        {lesson.prerequisites.length > 0 ? (
          <Section icon={GraduationCap} title="Prerequisites">
            <div className="flex flex-wrap gap-2">
              {lesson.prerequisites.map((p) => (
                <span
                  key={p}
                  className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
          </Section>
        ) : null}

        {lesson.useCases.length > 0 ? (
          <Section icon={Flag} title="Real-world use cases">
            <ul className="space-y-2">
              {lesson.useCases.map((u, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </Section>
        ) : null}

        {lesson.commonMistakes.length > 0 ? (
          <Section icon={AlertTriangle} title="Common mistakes to avoid">
            <div className="space-y-2">
              {lesson.commonMistakes.map((m, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 rounded-lg border border-amber-500/15 bg-amber-500/5 px-3 py-2.5 text-sm"
                >
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </Section>
        ) : null}

        <Section icon={BookOpen} title="Resources">
          <div className="grid gap-3 sm:grid-cols-2">
            <ExternalLinks
              title="Official docs"
              links={lesson.officialDocs}
              accent="text-primary"
            />
            {lesson.readings.length > 0 ? (
              <ExternalLinks title="Readings" links={lesson.readings} accent="text-primary" />
            ) : null}
            {lesson.resources.length > 0 ? (
              <ExternalLinks title="More resources" links={lesson.resources} accent="text-primary" />
            ) : null}
            <div className="rounded-lg border border-border bg-secondary/20 p-3.5">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-red-400">
                <Youtube className="h-3.5 w-3.5" /> Best video
              </p>
              <a
                href={lesson.youtubeVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground underline-offset-2 hover:underline"
              >
                {lesson.youtubeVideo.label}
              </a>
            </div>
          </div>
        </Section>

        <section className="card-surface overflow-hidden">
          <div className="flex items-center justify-between border-b border-border bg-secondary/20 px-6 py-4">
            <h2 className="flex items-center gap-2 text-base font-semibold">
              <CircleDashed className="h-4 w-4 text-primary" />
              Exercises
            </h2>
            <span className="text-xs text-muted-foreground">
              {exercisesDone}/{lesson.exercises.length} · {EXERCISE_XP} XP each
            </span>
          </div>
          <div className="divide-y divide-border">
            {lesson.exercises.map((ex, i) => {
              const checked = !!prog.exercises[i];
              return (
                <label
                  key={i}
                  className="flex cursor-pointer items-start gap-3 px-6 py-4 transition-colors hover:bg-secondary/20"
                >
                  <Checkbox
                    checked={checked}
                    onCheckedChange={() => toggleLessonExercise(lesson.id, i)}
                    className="mt-0.5"
                  />
                  <div className="flex-1">
                    <p className={cn("text-sm leading-relaxed", checked && "text-muted-foreground")}>
                      {ex}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {checked ? `+${EXERCISE_XP} XP earned` : `Earn ${EXERCISE_XP} XP`}
                    </p>
                  </div>
                </label>
              );
            })}
          </div>
        </section>

        <section className="card-surface overflow-hidden">
          <div className="flex items-center justify-between border-b border-border bg-secondary/20 px-6 py-4">
            <h2 className="flex items-center gap-2 text-base font-semibold">
              <Wrench className="h-4 w-4 text-accent" />
              Mini project
            </h2>
            <span className="text-xs text-muted-foreground">+{MINI_PROJECT_XP} XP</span>
          </div>
          <div className="px-6 py-5">
            <h3 className="text-sm font-bold">{lesson.miniProject.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {lesson.miniProject.description}
            </p>
            <ul className="mt-4 space-y-2">
              {lesson.miniProject.checklist.map((item, i) => {
                const checked = !!prog.checklist[`mini-${i}`];
                return (
                  <li key={i}>
                    <label className="flex cursor-pointer items-start gap-3 text-sm">
                      <Checkbox
                        checked={checked}
                        onCheckedChange={() => toggleLessonChecklist(lesson.id, `mini-${i}`)}
                        className="mt-0.5"
                      />
                      <span className={cn(checked && "text-muted-foreground line-through")}>
                        {item}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="card-surface overflow-hidden">
          <div className="flex items-center justify-between border-b border-border bg-secondary/20 px-6 py-4">
            <h2 className="flex items-center gap-2 text-base font-semibold">
              <ListChecks className="h-4 w-4 text-primary" />
              Lesson checklist
            </h2>
            <span className="text-xs text-muted-foreground">
              {checklistDone}/{lesson.checklist.length}
            </span>
          </div>
          <div className="px-6 py-4">
            <ul className="space-y-2">
              {lesson.checklist.map((item, i) => {
                const checked = !!prog.checklist[`check-${i}`];
                return (
                  <li key={i}>
                    <label className="flex cursor-pointer items-start gap-3 text-sm">
                      <Checkbox
                        checked={checked}
                        onCheckedChange={() => toggleLessonChecklist(lesson.id, `check-${i}`)}
                        className="mt-0.5"
                      />
                      <span className={cn(checked && "text-muted-foreground line-through")}>
                        {item}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="card-surface overflow-hidden">
          <div className="flex items-center gap-2 border-b border-border bg-secondary/20 px-6 py-4">
            <NotebookPen className="h-4 w-4 text-accent" />
            <h2 className="text-base font-semibold">Personal notes</h2>
          </div>
          <div className="p-5">
            <Textarea
              value={prog.notes}
              onChange={(e) => setLessonNotes(lesson.id, e.target.value)}
              placeholder="Write your own notes, code snippets, and key takeaways for this lesson. Saved automatically as you type."
              rows={6}
            />
            <p className="mt-2 text-xs text-muted-foreground">
              Notes are saved locally and appear on your Notes page.
            </p>
          </div>
        </section>

        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold">
              {prog.completed ? "Lesson complete" : "Finished studying?"}
            </h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {prog.completed
                ? `You earned ${totalXp} XP. Mark as in-progress to revisit.`
                : `Mark complete to earn ${totalXp} XP (${lessonBaseXp(lesson.difficulty)} base + exercises + mini project).`}
            </p>
          </div>
          <Button
            variant={prog.completed ? "outline" : "default"}
            size="lg"
            onClick={() => markLessonComplete(lesson.id, !prog.completed)}
          >
            {prog.completed ? "Mark as in-progress" : "Mark complete"}
          </Button>
        </div>

        <nav className="flex items-center justify-between gap-4 border-t border-border pt-6">
          {prev ? (
            <LessonNavLink
              direction="prev"
              title={prev.title}
              href={lessonHref(
                getLessonContext(prev.id)!.semester,
                getLessonContext(prev.id)!.module,
                prev
              )}
            />
          ) : (
            <span />
          )}
          {next ? (
            <LessonNavLink
              direction="next"
              title={next.title}
              href={lessonHref(
                getLessonContext(next.id)!.semester,
                getLessonContext(next.id)!.module,
                next
              )}
            />
          ) : (
            <span />
          )}
        </nav>
      </div>
    </AppShell>
  );
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      className="card-surface p-6"
    >
      <h2 className="mb-3 flex items-center gap-2 text-base font-semibold">
        <Icon className="h-4 w-4 text-primary" />
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function ExternalLinks({
  title,
  links,
  accent,
}: {
  title: string;
  links: { label: string; url: string }[];
  accent?: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-secondary/20 p-3.5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </p>
      <ul className="space-y-1.5">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground underline-offset-2 hover:underline"
            >
              <ExternalLink className={cn("h-3.5 w-3.5", accent)} />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LessonNavLink({
  direction,
  title,
  href,
}: {
  direction: "prev" | "next";
  title: string;
  href: string;
}) {
  const isNext = direction === "next";
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex max-w-[45%] flex-col gap-1 text-sm",
        isNext ? "items-end text-right" : "items-start"
      )}
    >
      <span className="flex items-center gap-1 text-xs text-muted-foreground">
        {!isNext && <ArrowLeft className="h-3.5 w-3.5" />}
        {isNext ? "Next lesson" : "Previous lesson"}
        {isNext && <ArrowRight className="h-3.5 w-3.5" />}
      </span>
      <span className="truncate font-medium group-hover:text-primary">{title}</span>
    </Link>
  );
}
