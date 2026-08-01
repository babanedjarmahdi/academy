"use client";

import { Award, Lock, Trophy } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/shared/page-header";
import { useAcademy } from "@/context/academy-provider";
import { ACHIEVEMENTS, isTechAchievement } from "@/lib/achievements";
import { cn } from "@/lib/utils";

export default function AchievementsPage() {
  const { unlockedAchievements, stats, streak, xp } = useAcademy();
  const unlocked = new Set(unlockedAchievements);

  const progressBar = (def: (typeof ACHIEVEMENTS)[number]) => {
    let current = 0;
    let target = 1;
    switch (def.id) {
      case "first-lesson":
        current = stats.completedLessons;
        target = 1;
        break;
      case "xp-100":
        current = xp;
        target = 100;
        break;
      case "xp-500":
        current = xp;
        target = 500;
        break;
      case "xp-1000":
        current = xp;
        target = 1000;
        break;
      case "xp-5000":
        current = xp;
        target = 5000;
        break;
      case "xp-10000":
        current = xp;
        target = 10000;
        break;
      case "first-project":
        current = stats.capstonesCompleted;
        target = 1;
        break;
      case "three-projects":
        current = stats.capstonesCompleted;
        target = 3;
        break;
      case "semester-one":
        current = stats.semestersCompleted;
        target = 1;
        break;
      case "full-stack":
        current = stats.semestersCompleted;
        target = 3;
        break;
      case "graduate":
        current = stats.semestersCompleted;
        target = 6;
        break;
      case "streak-3":
        current = streak;
        target = 3;
        break;
      case "streak-7":
        current = streak;
        target = 7;
        break;
      case "streak-30":
        current = streak;
        target = 30;
        break;
      case "streak-100":
        current = streak;
        target = 100;
        break;
      case "note-taker":
        current = stats.notesCount;
        target = 5;
        break;
      case "checklist-pro":
        current = stats.checklistDone;
        target = 20;
        break;
      case "exercise-whiz":
        current = stats.exercisesDone;
        target = 25;
        break;
      case "studious":
        current = stats.weekStudyDays;
        target = 7;
        break;
      default:
        return null;
    }
    return { current, target, pct: Math.min(100, (current / target) * 100) };
  };

  const techGroup = ACHIEVEMENTS.filter((a) => isTechAchievement(a.id));
  const milestones = ACHIEVEMENTS.filter((a) => !isTechAchievement(a.id));

  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          icon={Trophy}
          title="Achievements"
          description="Earn achievements as you complete lessons, build projects, and keep your streak alive."
        >
          <span className="rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm font-medium text-muted-foreground">
            {unlocked.size} / {ACHIEVEMENTS.length} unlocked
          </span>
        </PageHeader>

        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Milestones
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {milestones.map((def) => {
              const Icon = def.icon;
              const isUnlocked = unlocked.has(def.id);
              const bar = progressBar(def);
              return (
                <div
                  key={def.id}
                  className={cn(
                    "relative flex flex-col rounded-xl border p-4 transition-colors",
                    isUnlocked
                      ? "border-accent/30 bg-card"
                      : "border-border bg-card/60 opacity-80"
                  )}
                >
                  {isUnlocked ? (
                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-accent/15 px-1.5 py-0.5 text-[10px] font-bold text-accent">
                      <Award className="h-3 w-3" /> +{def.reward} XP
                    </span>
                  ) : (
                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-secondary px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                      <Lock className="h-3 w-3" />
                    </span>
                  )}
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-lg",
                      isUnlocked ? "bg-accent/15 text-accent" : "bg-secondary text-muted-foreground"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold">{def.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {def.description}
                  </p>
                  {bar ? (
                    <div className="mt-3">
                      <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-500"
                          style={{ width: `${bar.pct}%` }}
                        />
                      </div>
                      <p className="mt-1 text-[11px] text-muted-foreground">
                        {Math.min(bar.current, bar.target).toLocaleString()} /{" "}
                        {bar.target.toLocaleString()}
                      </p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Technology mastery
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {techGroup.map((def) => {
              const Icon = def.icon;
              const isUnlocked = unlocked.has(def.id);
              return (
                <div
                  key={def.id}
                  className={cn(
                    "flex items-center gap-3 rounded-xl border p-4",
                    isUnlocked ? "border-accent/30 bg-card" : "border-border bg-card/60 opacity-80"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                      isUnlocked ? "bg-accent/15 text-accent" : "bg-secondary text-muted-foreground"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold">{def.title}</h3>
                    <p className="truncate text-xs text-muted-foreground">{def.description}</p>
                    <p className="mt-0.5 text-[11px] text-accent">
                      {isUnlocked ? `+${def.reward} XP earned` : `Unlocks +${def.reward} XP`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
