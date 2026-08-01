import { STORAGE_KEY, STORAGE_VERSION } from "@/lib/constants";
import type { AcademyState } from "@/types";

export function defaultState(): AcademyState {
  return {
    version: STORAGE_VERSION,
    updatedAt: "",
    lessonProgress: {},
    capstoneProgress: {},
    activity: [],
    studyDays: [],
    achievements: [],
    onboarded: false,
  };
}

export function loadState(): AcademyState {
  if (typeof window === "undefined") return defaultState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw) as AcademyState;
    if (!parsed || parsed.version !== STORAGE_VERSION) return defaultState();
    return { ...defaultState(), ...parsed };
  } catch {
    return defaultState();
  }
}

export function saveState(state: AcademyState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage unavailable or full - fail silently
  }
}

export function clearState(): AcademyState {
  if (typeof window !== "undefined") {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }
  return defaultState();
}
