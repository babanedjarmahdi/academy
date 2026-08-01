"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { useAcademy } from "./academy-provider";
import {
  isSupabaseConfigured,
  PROGRESS_TABLE,
  supabase,
} from "@/lib/supabase";
import { defaultState } from "@/lib/storage";
import { STORAGE_VERSION } from "@/lib/constants";
import { todayKey } from "@/lib/utils";
import type { AcademyState } from "@/types";

export type SyncStatus =
  | "unconfigured"
  | "signed-out"
  | "authenticating"
  | "syncing"
  | "synced"
  | "error";

interface SyncValue {
  configured: boolean;
  status: SyncStatus;
  email: string | null;
  lastSyncedAt: string | null;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  syncNow: () => Promise<void>;
  exportBackup: () => void;
  importBackup: (file: File) => Promise<void>;
}

const SyncContext = createContext<SyncValue | null>(null);

const DEBOUNCE_MS = 1500;

export function SyncProvider({ children }: { children: ReactNode }) {
  const { state, restoreState, notify } = useAcademy();
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<SyncStatus>(
    isSupabaseConfigured ? "signed-out" : "unconfigured"
  );
  const [lastSyncedAt, setLastSyncedAt] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const stateRef = useRef(state);
  stateRef.current = state;

  const pullingRef = useRef(false);
  const readyRef = useRef(false);
  const debounceRef = useRef<number | null>(null);

  const push = useCallback(
    async (snapshot: AcademyState | null) => {
      if (!supabase || !user) return;
      if (!snapshot) return;
      setStatus("syncing");
      const now = snapshot.updatedAt || new Date().toISOString();
      const { error: err } = await supabase
        .from(PROGRESS_TABLE)
        .upsert({ user_id: user.id, state: snapshot, updated_at: now });
      if (err) {
        setStatus("error");
        setError(err.message);
        throw err;
      }
      setLastSyncedAt(new Date().toISOString());
      setStatus("synced");
    },
    [user]
  );

  const pullAndMerge = useCallback(async () => {
    if (!supabase || !user) return;
    pullingRef.current = true;
    try {
      const { data, error: err } = await supabase
        .from(PROGRESS_TABLE)
        .select("state, updated_at")
        .eq("user_id", user.id)
        .maybeSingle();
      if (err) throw err;

      const local = stateRef.current;
      const localT = local?.updatedAt ? new Date(local.updatedAt).getTime() : 0;

      if (data && data.state && typeof data.state === "object") {
        const remote = data.state as Partial<AcademyState>;
        if (remote.version === STORAGE_VERSION) {
          const remoteT = new Date(data.updated_at).getTime();
          if (remoteT > localT) {
            restoreState({
              ...defaultState(),
              ...(remote as AcademyState),
              updatedAt: (remote.updatedAt as string) || data.updated_at,
            });
            notify({
              type: "info",
              title: "Progress synced",
              detail: "Restored your latest progress from the cloud.",
            });
          } else if (localT > remoteT) {
            await push(local);
            notify({
              type: "info",
              title: "Progress synced",
              detail: "Uploaded your latest progress to the cloud.",
            });
          } else {
            setLastSyncedAt(new Date().toISOString());
            setStatus("synced");
          }
        }
      } else if (local) {
        await push(local);
      }
      readyRef.current = true;
      setStatus((s) => (s === "error" ? s : "synced"));
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Sync failed");
    } finally {
      pullingRef.current = false;
    }
  }, [user, restoreState, push, notify]);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        setSession(data.session);
        setUser(data.session.user);
      }
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      if (newSession) {
        setSession(newSession);
        setUser(newSession.user);
      } else {
        setSession(null);
        setUser(null);
        readyRef.current = false;
        setStatus("signed-out");
        setError(null);
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    pullAndMerge();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  useEffect(() => {
    if (!supabase || !user) return;
    if (!readyRef.current || pullingRef.current) return;
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      push(stateRef.current).catch(() => {});
    }, DEBOUNCE_MS);
    return () => {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, [state?.updatedAt, user, push]);

  const signIn = useCallback(
    async (email: string, password: string) => {
      if (!supabase) throw new Error("Cloud sync is not configured.");
      setError(null);
      setStatus("authenticating");
      const { error: err } = await supabase.auth.signInWithPassword({ email, password });
      if (err) {
        setStatus("error");
        setError(err.message);
        throw err;
      }
    },
    []
  );

  const signUp = useCallback(
    async (email: string, password: string) => {
      if (!supabase) throw new Error("Cloud sync is not configured.");
      setError(null);
      setStatus("authenticating");
      const { data, error: err } = await supabase.auth.signUp({ email, password });
      if (err) {
        setStatus("error");
        setError(err.message);
        throw err;
      }
      if (data.session) {
        setStatus("syncing");
      } else {
        setStatus("signed-out");
        setError(
          "Account created — check your email for a confirmation link, then sign in."
        );
      }
    },
    []
  );

  const signOut = useCallback(async () => {
    if (supabase) await supabase.auth.signOut();
    setSession(null);
    setUser(null);
    readyRef.current = false;
    setStatus("signed-out");
    setError(null);
  }, []);

  const syncNow = useCallback(async () => {
    if (!supabase) throw new Error("Cloud sync is not configured.");
    if (!user) throw new Error("Sign in first.");
    readyRef.current = true;
    await pullAndMerge();
  }, [user, pullAndMerge]);

  const exportBackup = useCallback(() => {
    const snapshot = stateRef.current;
    if (!snapshot) return;
    const blob = new Blob([JSON.stringify(snapshot, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `academy-backup-${todayKey()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    notify({
      type: "info",
      title: "Backup exported",
      detail: "A JSON backup of your progress was downloaded.",
    });
  }, [notify]);

  const importBackup = useCallback(
    async (file: File) => {
      const text = await file.text();
      let parsed: unknown;
      try {
        parsed = JSON.parse(text);
      } catch {
        throw new Error("That file is not valid JSON.");
      }
      const candidate = parsed as Partial<AcademyState>;
      if (
        !candidate ||
        candidate.version !== STORAGE_VERSION ||
        typeof candidate.lessonProgress !== "object" ||
        candidate.lessonProgress === null
      ) {
        throw new Error("That file is not an Academy backup.");
      }
      const merged: AcademyState = {
        ...defaultState(),
        ...candidate,
        updatedAt: candidate.updatedAt || new Date().toISOString(),
      } as AcademyState;
      restoreState(merged);
      notify({
        type: "info",
        title: "Backup restored",
        detail: "Your progress was restored from the backup file.",
      });
      if (user && supabase) {
        await push(merged).catch(() => {});
      }
    },
    [restoreState, notify, user, push]
  );

  const value: SyncValue = {
    configured: isSupabaseConfigured,
    status,
    email: user?.email ?? null,
    lastSyncedAt,
    error,
    signIn,
    signUp,
    signOut,
    syncNow,
    exportBackup,
    importBackup,
  };

  return <SyncContext.Provider value={value}>{children}</SyncContext.Provider>;
}

export function useSync(): SyncValue {
  const ctx = useContext(SyncContext);
  if (!ctx) {
    throw new Error("useSync must be used within SyncProvider");
  }
  return ctx;
}
