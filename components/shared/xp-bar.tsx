"use client";

import { Progress } from "@/components/ui/progress";
import { useAcademy } from "@/context/academy-provider";
import { cn } from "@/lib/utils";

export function XpBar({
  className,
  showLabels = true,
}: {
  className?: string;
  showLabels?: boolean;
}) {
  const { levelInfo } = useAcademy();
  const progress = Math.min(100, Math.round(levelInfo.progress));

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-baseline justify-between text-xs text-muted-foreground">
        {showLabels ? (
          <span>
            Level {levelInfo.level} &middot; {levelInfo.title}
          </span>
        ) : (
          <span>Level {levelInfo.level}</span>
        )}
        <span>
          {levelInfo.current.toLocaleString()} / {levelInfo.next.toLocaleString()} XP
        </span>
      </div>
      <Progress value={progress} indicatorClassName="bg-primary" className="h-2" />
    </div>
  );
}
