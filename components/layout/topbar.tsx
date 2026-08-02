"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Flame, GraduationCap, Search } from "lucide-react";
import { getLessonContext } from "@/data";
import { useAcademy } from "@/context/academy-provider";
import { lessonHref } from "@/lib/routes";
import { SyncStatusBadge } from "@/components/sync/sync-status-badge";
import { LogoMark } from "@/components/brand/logo";

export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const { streak, levelInfo, stats, todayMission } = useAcademy();
  const router = useRouter();
  const [time, setTime] = useState("");

  const missionHref = todayMission
    ? (() => {
        const ctx = getLessonContext(todayMission.id);
        return ctx ? lessonHref(ctx.semester, ctx.module, ctx.lesson) : "/curriculum";
      })()
    : "/curriculum";

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
    setTime(fmt());
  }, []);

  const openSearch = () => router.push("/search");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "?") return;
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      )
        return;
      e.preventDefault();
      openSearch();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <button
        onClick={onMenuClick}
        className="lg:hidden"
        aria-label="Open menu"
        title="Open menu"
      >
        <LogoMark className="h-9 w-9" />
      </button>
      <button
        onClick={openSearch}
        className="flex h-9 flex-1 items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3 text-sm text-muted-foreground transition-colors hover:bg-secondary sm:max-w-xs"
      >
        <Search className="h-4 w-4" />
        <span className="truncate">Search lessons, topics…</span>
        <kbd className="ml-auto hidden rounded border border-border bg-background px-1.5 py-0.5 text-[10px] sm:inline">
          ?
        </kbd>
      </button>

      <div className="ml-auto flex items-center gap-2">
        <SyncStatusBadge />
        <Link
          href={missionHref}
          className="hidden items-center gap-1.5 rounded-md border border-border bg-secondary/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:flex"
          title="Today's mission"
        >
          <GraduationCap className="h-3.5 w-3.5" />
          Continue
        </Link>
        <span className="hidden text-xs text-muted-foreground sm:inline">{time}</span>
        <span className="flex items-center gap-1 rounded-md border border-border bg-secondary/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground">
          Lv {levelInfo.level}
        </span>
        <span
          className="flex items-center gap-1 rounded-md border border-amber-500/20 bg-amber-500/10 px-2.5 py-1.5 text-xs font-medium text-amber-400"
          title="Study streak"
        >
          <Flame className="h-3.5 w-3.5" />
          {streak}
        </span>
        <span className="hidden rounded-md border border-border bg-secondary/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground md:inline">
          {stats.completedLessons}/{stats.totalLessons} lessons
        </span>
      </div>
    </header>
  );
}
