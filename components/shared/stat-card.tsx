import { cn } from "@/lib/utils";

export function StatCard({
  label,
  value,
  sub,
  icon: Icon,
  accent = "text-primary",
  className,
}: {
  label: string;
  value: React.ReactNode;
  sub?: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  accent?: string;
  className?: string;
}) {
  return (
    <div className={cn("card-surface relative overflow-hidden p-5", className)}>
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </p>
          <div className="mt-2 text-2xl font-bold tracking-tight">{value}</div>
          {sub ? <div className="mt-1 text-xs text-muted-foreground">{sub}</div> : null}
        </div>
        <div className={cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/70", accent)}>
          <Icon className="h-4.5 w-4.5" />
        </div>
      </div>
    </div>
  );
}
