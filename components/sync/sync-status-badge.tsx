"use client";

import Link from "next/link";
import { Cloud, CloudOff, Loader2 } from "lucide-react";
import { useSync } from "@/context/sync-provider";
import { cn } from "@/lib/utils";

const meta: Record<
  string,
  { label: string; icon: typeof Cloud; className: string; spin?: boolean }
> = {
  synced: {
    label: "Synced",
    icon: Cloud,
    className: "text-accent border-accent/25 bg-accent/10",
  },
  syncing: {
    label: "Syncing…",
    icon: Loader2,
    className: "text-primary border-primary/25 bg-primary/10",
    spin: true,
  },
  authenticating: {
    label: "Signing in…",
    icon: Loader2,
    className: "text-primary border-primary/25 bg-primary/10",
    spin: true,
  },
  error: {
    label: "Sync error",
    icon: CloudOff,
    className: "text-red-400 border-red-500/25 bg-red-500/10",
  },
  "signed-out": {
    label: "Sync off",
    icon: CloudOff,
    className: "text-muted-foreground border-border bg-secondary/50",
  },
  unconfigured: {
    label: "Sync off",
    icon: CloudOff,
    className: "text-muted-foreground border-border bg-secondary/50",
  },
};

export function SyncStatusBadge() {
  const { status } = useSync();
  const m = meta[status] ?? meta["signed-out"];
  const Icon = m.icon;
  return (
    <Link
      href="/settings"
      title={m.label}
      className={cn(
        "hidden items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors sm:inline-flex",
        m.className
      )}
    >
      <Icon className={cn("h-3.5 w-3.5", m.spin && "animate-spin")} />
      {m.label}
    </Link>
  );
}
