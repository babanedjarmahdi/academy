"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Flame,
  GraduationCap,
  ListChecks,
  PlayCircle,
  Sparkles,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";
import { useAcademy } from "@/context/academy-provider";
import { semesters } from "@/data";
import { getLessonContext } from "@/data";
import { lessonHref } from "@/lib/routes";
import { ACHIEVEMENTS } from "@/lib/achievements";
import { formatRelative, todayKey } from "@/lib/utils";
import { StatCard } from "@/components/shared/stat-card";
import { ProgressRing } from "@/components/shared/progress-ring";
import { XpBar } from "@/components/shared/xp-bar";
import { cn } from "@/lib/utils";

const activityIcons = {
  lesson: PlayCircle,
  exercise: CheckCircle2,
  project: Trophy,
  semester: GraduationCap,
  achievement: Award,
  streak: Flame,
} as const;

export function Dashboard() {
  const {
    state,
    stats,
    streak,
    xp,
    levelInfo,
    todayMission,
    semestersStatus,
    recentActivities,
    unlockedAchievements,
  } = useAcademy();

  const studyDays = new Set(state.studyDays);
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d;
  });

  const recentUnlocked = ACHIEVEMENTS.filter((a) =>
    unlockedAchievements.includes(a.id)
  )
    .slice(-4)
    .reverse();

  return (
    <div className="space-y-8">
      <section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Welcome back, Engineer</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Your learning dashboard
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {stats.completedLessons} of {stats.totalLessons} lessons completed
              &middot; {levelInfo.title} (Level {levelInfo.level})
            </p>
          </div>
          {todayMission ? <MissionButton /> : null}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="card-surface flex items-center gap-4 p-5">
          <ProgressRing value={stats.overallProgress} size={84} stroke={9}>
            <span className="text-sm font-bold">{Math.round(stats.overallProgress)}%</span>
          </ProgressRing>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Curriculum
            </p>
            <p className="mt-1 text-lg font-bold">{stats.overallProgress.toFixed(0)}%</p>
            <p className="text-xs text-muted-foreground">
              {stats.semestersCompleted}/{stats.semestersTotal} semesters done
            </p>
          </div>
        </div>
        <StatCard
          label="Lessons"
          value={stats.completedLessons}
          sub={`${stats.exercisesDone} exercises solved`}
          icon={CheckCircle2}
          accent="text-primary"
        />
        <StatCard
          label="Streak"
          value={`${streak} day${streak === 1 ? "" : "s"}`}
          sub={`${stats.weekStudyDays} study days this week`}
          icon={Flame}
          accent="text-amber-400"
        />
        <StatCard
          label="XP"
          value={xp.toLocaleString()}
          sub={`${stats.weekLessons} lessons this week`}
          icon={Sparkles}
          accent="text-accent"
        />
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <section className="card-surface p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-sm font-semibold">
                <Flame className="h-4 w-4 text-amber-400" />
                This week
              </h2>
              <Link href="/achievements" className="text-xs text-muted-foreground hover:text-foreground">
                View achievements →
              </Link>
            </div>
            <div className="flex items-end justify-between gap-2">
              {days.map((day) => {
                const key = todayKey(day);
                const active = studyDays.has(key);
                const isToday =
                  key === todayKey(new Date());
                return (
                  <div key={key} className="flex flex-1 flex-col items-center gap-2">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: days.indexOf(day) * 0.04 }}
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-lg border text-xs font-semibold transition-colors sm:h-11 sm:w-11",
                        active
                          ? "border-accent/40 bg-accent/20 text-accent"
                          : "border-border bg-secondary/40 text-muted-foreground/50",
                        isToday && "ring-1 ring-primary/50"
                      )}
                    >
                      {active ? <CheckCircle2 className="h-4 w-4" /> : day.getDate()}
                    </motion.div>
                    <span className="text-[10px] uppercase text-muted-foreground">
                      {day.toLocaleDateString(undefined, { weekday: "short" })}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold">Your semesters</h2>
              <Link href="/curriculum" className="text-xs text-muted-foreground hover:text-foreground">
                Open curriculum →
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {semestersStatus.map((s, i) => (
                <SemesterCard
                  key={s.semesterId}
                  index={i}
                  title={s.title}
                  done={s.lessonsDone}
                  total={s.lessons}
                  capstoneDone={s.capstoneDone}
                  complete={s.complete}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="card-surface p-5">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold">Level progress</h2>
              <span className="rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
                Level {levelInfo.level}
              </span>
            </div>
            <XpBar />
            <p className="mt-2 text-xs text-muted-foreground">
              {levelInfo.title} &middot; {levelInfo.current.toLocaleString()} XP into this
              level
            </p>
          </section>

          <section className="card-surface p-5">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-sm font-semibold">
                <Trophy className="h-4 w-4 text-accent" />
                Recent achievements
              </h2>
              <Link href="/achievements" className="text-xs text-muted-foreground hover:text-foreground">
                All →
              </Link>
            </div>
            {recentUnlocked.length > 0 ? (
              <div className="space-y-2">
                {recentUnlocked.map((a) => {
                  const Icon = a.icon;
                  return (
                    <div
                      key={a.id}
                      className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 p-2.5"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15">
                        <Icon className="h-4 w-4 text-accent" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{a.title}</p>
                        <p className="text-xs text-muted-foreground">+{a.reward} XP</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Complete lessons to unlock your first achievement.
              </p>
            )}
          </section>

          <section className="card-surface p-5">
            <h2 className="mb-3 text-sm font-semibold">Recent activity</h2>
            {recentActivities.length > 0 ? (
              <div className="space-y-3">
                {recentActivities.map((a) => {
                  const Icon = activityIcons[a.type] ?? PlayCircle;
                  return (
                    <div key={a.id} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary/60">
                        <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium leading-tight">
                          {a.title}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {a.detail ?? ""}
                          {a.xp ? ` · +${a.xp} XP` : ""}
                        </p>
                      </div>
                      <span className="shrink-0 text-[11px] text-muted-foreground/70">
                        {formatRelative(a.at)}
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Your activity will show up here.
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

function MissionButton() {
  const { todayMission } = useAcademy();
  const ctx = todayMission ? getLessonContext(todayMission.id) : undefined;
  const href = ctx
    ? lessonHref(ctx.semester, ctx.module, ctx.lesson)
    : "/curriculum";
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
    >
      <PlayCircle className="h-4 w-4" />
      Today&apos;s mission
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

function SemesterCard({
  index,
  title,
  done,
  total,
  capstoneDone,
  complete,
}: {
  index: number;
  title: string;
  done: number;
  total: number;
  capstoneDone: boolean;
  complete: boolean;
}) {
  const semester = semesters[index];
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return (
    <Link
      href={`/curriculum/${semester.id}`}
      className="group rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
    >
      <div className="flex items-center justify-between">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${semester.color}22`, color: semester.color }}
        >
          {semester.icon ? <semester.icon className="h-4 w-4" /> : null}
        </span>
        {complete ? (
          <span className="flex items-center gap-1 text-xs font-medium text-accent">
            <CheckCircle2 className="h-3.5 w-3.5" /> Done
          </span>
        ) : (
          <span className="text-xs text-muted-foreground">
            S{index + 1} &middot; {pct}%
          </span>
        )}
      </div>
      <h3 className="mt-3 truncate text-sm font-semibold group-hover:text-primary">
        {title}
      </h3>
      <div className="mt-2 flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, backgroundColor: semester.color }}
          />
        </div>
        <span className="shrink-0 text-xs text-muted-foreground">
          {done}/{total}
        </span>
      </div>
      <p className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground">
        <ListChecks className="h-3 w-3" />
        Capstone: {capstoneDone ? "completed" : "not yet"}
      </p>
    </Link>
  );
}
