import type { Capstone, Lesson, Module, Semester } from "@/types";

export function lessonHref(
  semester: Semester,
  module: Module,
  lesson: Lesson
): string {
  return `/curriculum/${semester.id}/${module.id}/${lesson.id}`;
}

export function capstoneHref(semester: Semester): string {
  return `/projects/${semester.capstone.id}`;
}

export function lessonHrefFromId(
  lessonId: string,
  ctx?: { semester: Semester; module: Module; lesson: Lesson }
): string {
  if (ctx) return lessonHref(ctx.semester, ctx.module, ctx.lesson);
  return `/curriculum?lesson=${lessonId}`;
}

export function capstoneHrefFromId(
  capstoneId: string,
  capstones?: Capstone[]
): string {
  const c = capstones?.find((x) => x.id === capstoneId);
  if (c) return `/projects/${capstoneId}`;
  return `/projects?capstone=${capstoneId}`;
}
