"use client";

import { useState } from "react";
import {
  Cloud,
  CloudOff,
  ExternalLink,
  KeyRound,
  Loader2,
  LogOut,
  Mail,
  RefreshCw,
  User,
} from "lucide-react";
import { useSync } from "@/context/sync-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { formatRelative } from "@/lib/utils";

export function AccountPanel() {
  const { configured, status, email, lastSyncedAt, error, signIn, signUp, signOut, syncNow } =
    useSync();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [formEmail, setFormEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const authenticated = Boolean(email);

  if (!configured) {
    return (
      <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-4">
        <p className="flex items-center gap-2 text-sm font-semibold text-amber-400">
          <CloudOff className="h-4 w-4" />
          Cloud sync is not configured yet
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-muted-foreground">
          <li>
            Create a free project at{" "}
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary underline-offset-2 hover:underline"
            >
              supabase.com <ExternalLink className="h-3 w-3" />
            </a>
          </li>
          <li>
            Run the SQL in <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">supabase/schema.sql</code>{" "}
            in the SQL editor
          </li>
          <li>
            Copy your project URL and anon key into{" "}
            <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">.env.local</code>{" "}
            (see <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">.env.local.example</code>)
          </li>
          <li>Restart the dev server and sign in here</li>
        </ol>
        <p className="mt-3 text-xs text-muted-foreground">
          Local backup and restore work right now without any setup — see the Backup section
          below.
        </p>
      </div>
    );
  }

  const statusLabel =
    status === "syncing"
      ? "Syncing…"
      : status === "authenticating"
        ? "Signing in…"
        : status === "error"
          ? "Sync error"
          : status === "synced"
            ? "Up to date"
            : "Not synced";

  return (
    <div className="space-y-4">
      {authenticated ? (
        <>
          <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-secondary/30 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
              <User className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{email}</p>
              <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Cloud
                  className={cn(
                    "h-3.5 w-3.5",
                    status === "syncing" && "animate-pulse text-primary",
                    status === "error" && "text-red-400"
                  )}
                />
                {statusLabel}
                {lastSyncedAt ? ` · last sync ${formatRelative(lastSyncedAt)}` : ""}
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={() => syncNow().catch(() => {})}>
              <RefreshCw className="h-3.5 w-3.5" />
              Sync now
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => signOut()}
              className="text-muted-foreground"
            >
              <LogOut className="h-3.5 w-3.5" />
              Sign out
            </Button>
          </div>
          {error ? <p className="text-sm text-red-400">{error}</p> : null}
        </>
      ) : (
        <>
          <div className="flex gap-1 rounded-lg border border-border bg-secondary/40 p-1">
            {(["signin", "signup"] as const).map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMode(m);
                  setLocalError(null);
                }}
                className={cn(
                  "flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  mode === m
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {m === "signin" ? "Sign in" : "Create account"}
              </button>
            ))}
          </div>

          <form
            className="space-y-3"
            onSubmit={async (e) => {
              e.preventDefault();
              setBusy(true);
              setLocalError(null);
              try {
                if (mode === "signin") await signIn(formEmail, password);
                else await signUp(formEmail, password);
              } catch (err) {
                setLocalError(err instanceof Error ? err.message : "Something went wrong");
              } finally {
                setBusy(false);
              }
            }}
          >
            <div className="space-y-1.5">
              <Label htmlFor="sync-email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="sync-email"
                  type="email"
                  required
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="pl-9"
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="sync-password">Password</Label>
              <div className="relative">
                <KeyRound className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="sync-password"
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === "signup" ? "At least 6 characters" : "Your password"}
                  className="pl-9"
                  autoComplete={mode === "signup" ? "new-password" : "current-password"}
                />
              </div>
            </div>

            {(localError || error) && (
              <p className="text-sm text-red-400">{localError ?? error}</p>
            )}

            <Button type="submit" className="w-full" disabled={busy}>
              {busy ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : mode === "signin" ? (
                "Sign in"
              ) : (
                "Create account"
              )}
            </Button>
            {mode === "signup" ? (
              <p className="text-center text-xs text-muted-foreground">
                {status === "signed-out" && error?.includes("confirmation")
                  ? error
                  : "Accounts are managed securely by Supabase."}
              </p>
            ) : null}
          </form>
        </>
      )}
    </div>
  );
}
