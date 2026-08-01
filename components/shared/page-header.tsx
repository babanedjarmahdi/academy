import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  description,
  icon: Icon,
  children,
  className,
}: {
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", className)}>
      <div className="flex items-start gap-3">
        {Icon ? (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        ) : null}
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
          {description ? (
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
      </div>
      {children ? <div className="flex items-center gap-2">{children}</div> : null}
    </div>
  );
}
