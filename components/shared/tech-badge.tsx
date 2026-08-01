import { TECH_COLORS, TECH_NAMES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function TechBadge({ tech, className }: { tech: string; className?: string }) {
  const color = TECH_COLORS[tech] ?? "#8B8B8B";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2 py-0.5 text-xs text-muted-foreground",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
      {TECH_NAMES[tech] ?? tech}
    </span>
  );
}

export function TechDot({ tech, size = 6 }: { tech: string; size?: number }) {
  const color = TECH_COLORS[tech] ?? "#8B8B8B";
  return (
    <span
      className="inline-block rounded-full"
      style={{ width: size, height: size, backgroundColor: color }}
    />
  );
}
