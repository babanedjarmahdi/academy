"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Award, Info, Sparkles } from "lucide-react";
import { useAcademy } from "@/context/academy-provider";
import { cn } from "@/lib/utils";

const typeStyles = {
  xp: {
    icon: Sparkles,
    iconClass: "text-primary",
    ring: "ring-primary/30",
  },
  achievement: {
    icon: Award,
    iconClass: "text-accent",
    ring: "ring-accent/30",
  },
  info: {
    icon: Info,
    iconClass: "text-muted-foreground",
    ring: "ring-border",
  },
};

export function ToastViewport() {
  const { toasts, dismissToast } = useAcademy();

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[100] flex w-full max-w-sm flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => {
          const style = typeStyles[toast.type];
          const Icon = style.icon;
          return (
            <motion.button
              key={toast.id}
              layout
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 24, transition: { duration: 0.2 } }}
              onClick={() => dismissToast(toast.id)}
              className={cn(
                "pointer-events-auto flex w-full items-start gap-3 rounded-lg border border-border bg-popover/95 p-3.5 text-left shadow-lg ring-1 backdrop-blur-xl",
                style.ring
              )}
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary/70">
                <Icon className={cn("h-4 w-4", style.iconClass)} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-tight">{toast.title}</p>
                {toast.detail ? (
                  <p className="mt-0.5 text-xs text-muted-foreground">{toast.detail}</p>
                ) : null}
              </div>
              {toast.xp ? (
                <span className="flex shrink-0 items-center gap-1 rounded-md bg-primary/10 px-1.5 py-0.5 text-xs font-bold text-primary">
                  +{toast.xp}
                </span>
              ) : null}
            </motion.button>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
