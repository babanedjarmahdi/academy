"use client";

import { useAcademy } from "@/context/academy-provider";
import { AppShell } from "@/components/layout/app-shell";
import { Onboarding } from "@/components/onboarding";
import { Dashboard } from "@/components/dashboard/dashboard";

export default function Home() {
  const { state } = useAcademy();

  if (!state.onboarded) {
    return <Onboarding />;
  }

  return (
    <AppShell>
      <Dashboard />
    </AppShell>
  );
}
