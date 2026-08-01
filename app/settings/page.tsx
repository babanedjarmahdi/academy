"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Cloud,
  Database,
  HardDriveDownload,
  Keyboard,
  RotateCcw,
  Trash2,
} from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/shared/page-header";
import { useAcademy } from "@/context/academy-provider";
import { AccountPanel } from "@/components/sync/account-panel";
import { BackupPanel } from "@/components/sync/backup-panel";
import { APP_NAME, APP_TAGLINE, NAV_ITEMS, STORAGE_KEY, STORAGE_VERSION } from "@/lib/constants";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  const { resetProgress, stats, xp, unlockedAchievements } = useAcademy();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleReset = () => {
    resetProgress();
    setConfirmOpen(false);
    window.location.reload();
  };

  return (
    <AppShell>
      <div className="space-y-8">
        <PageHeader
          icon={Keyboard}
          title="Settings"
          description="Account, sync, backups, shortcuts, and your local data."
        />

        <section className="card-surface p-6">
          <h2 className="mb-4 flex items-center gap-2 text-base font-semibold">
            <Cloud className="h-4 w-4 text-primary" />
            Account &amp; cloud sync
          </h2>
          <AccountPanel />
        </section>

        <section className="card-surface p-6">
          <h2 className="mb-4 flex items-center gap-2 text-base font-semibold">
            <HardDriveDownload className="h-4 w-4 text-primary" />
            Backup &amp; restore
          </h2>
          <BackupPanel />
        </section>

        <section className="card-surface p-6">
          <h2 className="mb-4 flex items-center gap-2 text-base font-semibold">
            <Keyboard className="h-4 w-4 text-primary" />
            Keyboard shortcuts
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.href}
                className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 px-3 py-2 text-sm"
              >
                <span>{item.label}</span>
                <kbd className="rounded border border-border bg-background px-2 py-0.5 text-[11px] text-muted-foreground">
                  {item.shortcut}
                </kbd>
              </div>
            ))}
            <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 px-3 py-2 text-sm">
              <span>Search</span>
              <kbd className="rounded border border-border bg-background px-2 py-0.5 text-[11px] text-muted-foreground">
                ?
              </kbd>
            </div>
          </div>
        </section>

        <section className="card-surface p-6">
          <h2 className="mb-4 flex items-center gap-2 text-base font-semibold">
            <Database className="h-4 w-4 text-primary" />
            Local data
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 px-3 py-2">
              <span className="text-muted-foreground">Storage key</span>
              <code className="rounded bg-background px-2 py-0.5 text-xs">{STORAGE_KEY}</code>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 px-3 py-2">
              <span className="text-muted-foreground">Schema version</span>
              <span>v{STORAGE_VERSION}</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 px-3 py-2">
              <span className="text-muted-foreground">Total XP</span>
              <span>{xp.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 px-3 py-2">
              <span className="text-muted-foreground">Achievements unlocked</span>
              <span>{unlockedAchievements.length}</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border bg-secondary/30 px-3 py-2">
              <span className="text-muted-foreground">Lessons completed</span>
              <span>{stats.completedLessons}</span>
            </div>
          </div>
        </section>

        <section className="card-surface border-red-500/20 p-6">
          <h2 className="mb-2 flex items-center gap-2 text-base font-semibold text-red-400">
            <AlertTriangle className="h-4 w-4" />
            Danger zone
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Reset wipes all progress — lessons, XP, achievements, streak, notes, and portfolio
            projects. This cannot be undone.
          </p>
          <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
            <DialogTrigger asChild>
              <Button variant="destructive">
                <RotateCcw className="h-4 w-4" />
                Reset all progress
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Reset all progress?</DialogTitle>
                <DialogDescription>
                  This will permanently delete your XP, completed lessons, achievements,
                  streak, and notes. You&apos;ll start from the beginning.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setConfirmOpen(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleReset}>
                  <Trash2 className="h-4 w-4" />
                  Yes, reset everything
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>

        <Separator />

        <p className="text-center text-xs text-muted-foreground">
          {APP_NAME} &middot; {APP_TAGLINE} &middot; Built with Next.js, React, and Tailwind CSS
        </p>
      </div>
    </AppShell>
  );
}
