import { DIFFICULTY_META } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Difficulty } from "@/types";

export function DifficultyBadge({
  difficulty,
  className,
}: {
  difficulty: Difficulty;
  className?: string;
}) {
  const meta = DIFFICULTY_META[difficulty];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs font-medium",
        meta.className,
        className
      )}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: meta.color }}
      />
      {meta.label}
    </span>
  );
}
