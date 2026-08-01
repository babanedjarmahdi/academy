"use client";

import Link from "next/link";
import { ChevronRight, NotebookPen } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { semesters } from "@/data";
import { useAcademy } from "@/context/academy-provider";
import { lessonHref, capstoneHref } from "@/lib/routes";
import { formatDate } from "@/lib/utils";

export default function NotesPage() {
  const { getLessonProgress, getCapstoneProgress, stats } = useAcademy();

  const lessonNotes = semesters.flatMap((semester) =>
    semester.modules.flatMap((module) =>
      module.lessons
        .map((lesson) => ({ semester, module, lesson, prog: getLessonProgress(lesson.id) }))
        .filter(({ prog }) => prog.notes.trim().length > 0)
    )
  );

  const capstoneNotes = semesters
    .map((semester) => ({
      semester,
      prog: getCapstoneProgress(semester.capstone.id),
    }))
    .filter(({ prog }) => prog.notes.trim().length > 0);

  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          icon={NotebookPen}
          title="Notes"
          description="Your personal notes across all lessons and projects. Everything is saved locally in your browser."
        >
          <span className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm font-medium text-muted-foreground">
            {stats.notesCount} lessons with notes
          </span>
        </PageHeader>

        {lessonNotes.length === 0 && capstoneNotes.length === 0 ? (
          <EmptyState
            icon={NotebookPen}
            title="No notes yet"
            description="Write notes in any lesson to capture your understanding. They'll show up here automatically."
          />
        ) : (
          <div className="space-y-8">
            {lessonNotes.length > 0 ? (
              <section>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Lesson notes
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {lessonNotes.map(({ semester, module, lesson, prog }) => (
                    <Link
                      key={lesson.id}
                      href={lessonHref(semester, module, lesson)}
                      className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                    >
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                        <span className="truncate">S{semester.number} · {module.title}</span>
                        {prog.completedAt ? (
                          <span className="ml-auto shrink-0">
                            updated {formatDate(prog.completedAt)}
                          </span>
                        ) : null}
                      </div>
                      <h3 className="mt-1.5 truncate text-sm font-semibold group-hover:text-primary">
                        {lesson.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {prog.notes}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                        Open lesson <ChevronRight className="h-3 w-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}

            {capstoneNotes.length > 0 ? (
              <section>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Project notes
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {capstoneNotes.map(({ semester, prog }) => (
                    <Link
                      key={semester.capstone.id}
                      href={capstoneHref(semester)}
                      className="group flex flex-col rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/40"
                    >
                      <span className="text-[11px] text-muted-foreground">
                        Capstone · Semester {semester.number}
                      </span>
                      <h3 className="mt-1.5 truncate text-sm font-semibold group-hover:text-accent">
                        {semester.capstone.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {prog.notes}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent">
                        Open project <ChevronRight className="h-3 w-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        )}
      </div>
    </AppShell>
  );
}
