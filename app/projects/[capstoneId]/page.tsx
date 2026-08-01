"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  CheckCircle2,
  ChevronLeft,
  Clock,
  ListChecks,
  NotebookPen,
  Rocket,
  Star,
  Target,
  Wrench,
} from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { semesters } from "@/data";
import { useAcademy } from "@/context/academy-provider";
import { DifficultyBadge } from "@/components/shared/difficulty-badge";
import { TechBadge } from "@/components/shared/tech-badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { formatRelative } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function CapstonePage() {
  const params = useParams<{ capstoneId: string }>();
  const semester = semesters.find((s) => s.capstone.id === params.capstoneId);
  const {
    getCapstoneProgress,
    toggleCapstoneChecklist,
    markCapstoneComplete,
    setCapstoneNotes,
    setCapstoneReview,
  } = useAcademy();

  if (!semester) notFound();
  const capstone = semester.capstone;
  const prog = getCapstoneProgress(capstone.id);
  const checklistDone = capstone.checklist.filter((c) => prog.checklist[c]).length;

  return (
    <AppShell>
      <div className="mx-auto max-w-4xl space-y-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="h-4 w-4" />
          Projects
        </Link>

        <header className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-secondary px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              Semester {semester.number}
            </span>
            <DifficultyBadge difficulty={capstone.difficulty} />
            {capstone.technologies.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
          <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            {capstone.title}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {capstone.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              Est. {capstone.estimatedHours} hours
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5" />
              {capstone.xp} XP
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ListChecks className="h-3.5 w-3.5" />
              {checklistDone}/{capstone.checklist.length} steps done
            </span>
          </div>
          {prog.completed ? (
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-accent/25 bg-accent/10 px-3 py-2 text-sm text-accent">
              <CheckCircle2 className="h-4 w-4" />
              Project completed
              {prog.completedAt ? ` · ${formatRelative(prog.completedAt)}` : ""}
            </div>
          ) : null}
        </header>

        {capstone.objectives.length > 0 ? (
          <section className="card-surface p-6">
            <h2 className="mb-3 flex items-center gap-2 text-base font-semibold">
              <Target className="h-4 w-4 text-primary" />
              What you&apos;ll build
            </h2>
            <ul className="space-y-2">
              {capstone.objectives.map((o, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {capstone.requiredSkills.length > 0 ? (
          <section className="card-surface p-6">
            <h2 className="mb-3 flex items-center gap-2 text-base font-semibold">
              <Wrench className="h-4 w-4 text-accent" />
              Skills you&apos;ll apply
            </h2>
            <div className="flex flex-wrap gap-2">
              {capstone.requiredSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        ) : null}

        <section className="card-surface overflow-hidden">
          <div className="flex items-center justify-between border-b border-border bg-secondary/20 px-6 py-4">
            <h2 className="flex items-center gap-2 text-base font-semibold">
              <ListChecks className="h-4 w-4 text-primary" />
              Build checklist
            </h2>
            <span className="text-xs text-muted-foreground">
              {checklistDone}/{capstone.checklist.length}
            </span>
          </div>
          <ul className="px-6 py-4">
            {capstone.checklist.map((item, i) => {
              const checked = !!prog.checklist[`step-${i}`];
              return (
                <li key={i} className="py-1">
                  <label className="flex cursor-pointer items-start gap-3 text-sm">
                    <Checkbox
                      checked={checked}
                      onCheckedChange={() => toggleCapstoneChecklist(capstone.id, `step-${i}`)}
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
        </section>

        <section className="card-surface overflow-hidden">
          <div className="flex items-center gap-2 border-b border-border bg-secondary/20 px-6 py-4">
            <NotebookPen className="h-4 w-4 text-accent" />
            <h2 className="text-base font-semibold">Project notes</h2>
          </div>
          <div className="p-5">
            <Textarea
              value={prog.notes}
              onChange={(e) => setCapstoneNotes(capstone.id, e.target.value)}
              placeholder="Document your architecture decisions, code structure, and how you'd improve it next time."
              rows={5}
            />
          </div>
        </section>

        <section className="card-surface overflow-hidden">
          <div className="flex items-center gap-2 border-b border-border bg-secondary/20 px-6 py-4">
            <Star className="h-4 w-4 text-amber-400" />
            <h2 className="text-base font-semibold">Final review</h2>
          </div>
          <div className="p-5">
            <Textarea
              value={prog.finalReview}
              onChange={(e) => setCapstoneReview(capstone.id, e.target.value)}
              placeholder="Write a short review of your work: what you built, what you learned, and what you'd do differently. Shown on your portfolio."
              rows={4}
            />
          </div>
        </section>

        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-base font-semibold">
              {prog.completed ? "Project complete" : "Ready to ship it?"}
            </h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {prog.completed
                ? `Earned ${capstone.xp} XP. This project now appears on your portfolio.`
                : `Mark complete to earn ${capstone.xp} XP and add this project to your portfolio.`}
            </p>
          </div>
          <Button
            variant={prog.completed ? "outline" : "default"}
            size="lg"
            onClick={() => markCapstoneComplete(capstone.id, !prog.completed)}
          >
            <Rocket className="h-4 w-4" />
            {prog.completed ? "Reopen project" : "Mark complete"}
          </Button>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Part of{" "}
          <Link
            href={`/curriculum/${semester.id}`}
            className="text-foreground underline-offset-2 hover:underline"
          >
            {semester.title}
          </Link>
        </p>
      </div>
    </AppShell>
  );
}
