"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Rocket,
  Workflow,
} from "lucide-react";
import { useAcademy } from "@/context/academy-provider";
import { APP_NAME, APP_TAGLINE } from "@/lib/constants";

const highlights = [
  { icon: Code2, title: "6 semesters", text: "96 hands-on lessons from zero to expert." },
  { icon: Workflow, title: "Real projects", text: "6 capstone builds for your portfolio." },
  { icon: Rocket, title: "Gamified learning", text: "XP, levels, streaks, and achievements." },
];

export function Onboarding() {
  const { completeOnboarding } = useAcademy();
  const [started, setStarted] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,hsl(var(--primary)/0.12),transparent_70%)]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-lg"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 18 }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-xl shadow-primary/25"
          >
            <Bot className="h-8 w-8 text-primary-foreground" />
          </motion.div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            {APP_NAME}
          </h1>
          <p className="mt-2 text-muted-foreground">{APP_TAGLINE}</p>
        </div>

        {!started ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-8 space-y-3"
          >
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/70">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
            <button
              onClick={() => setStarted(true)}
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Get started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 rounded-2xl border border-border bg-card/70 p-6"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent" />
              <h2 className="text-lg font-semibold">You&apos;re all set</h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Your journey starts with Semester 1 — JavaScript, TypeScript, Git, and
              Linux. Open the curriculum, complete your first lesson, and earn XP from
              day one.
            </p>
            <button
              onClick={completeOnboarding}
              className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90"
            >
              Enter the Academy
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
