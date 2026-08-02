"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { useAcademy } from "@/context/academy-provider";
import { XpBar } from "@/components/shared/xp-bar";
import { Logo } from "@/components/brand/logo";

export function SidebarContent() {
  const pathname = usePathname();
  const { streak } = useAcademy();

  return (
    <div className="flex h-full flex-col">
      <div className="px-5 pb-6 pt-6">
        <Logo />
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 scrollbar-thin">
        <Link
          href="/search"
          className={cn(
            "mb-3 flex items-center gap-3 rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary",
            pathname === "/search" && "border-primary/40 text-foreground"
          )}
        >
          <Search className="h-4 w-4" />
          Search curriculum
          <kbd className="ml-auto rounded border border-border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
            ?
          </kbd>
        </Link>

        {NAV_ITEMS.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                active && "bg-secondary text-foreground"
              )}
            >
              <span className="flex items-center gap-3">
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full bg-muted-foreground/40 transition-colors group-hover:bg-primary",
                    active && "bg-primary"
                  )}
                />
                {item.label}
              </span>
              <kbd className="rounded border border-border bg-background/60 px-1.5 py-0.5 text-[10px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {item.shortcut}
              </kbd>
            </Link>
          );
        })}

        <div className="!mt-4 border-t border-border pt-4">
          <Link
            href="/settings"
            className={cn(
              "flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
              pathname === "/settings" && "bg-secondary text-foreground"
            )}
          >
            <span className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
              Settings
            </span>
          </Link>
        </div>
      </nav>

      <div className="border-t border-border p-4">
        <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-medium">Progress</span>
          <span className="flex items-center gap-1 text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            {streak}-day streak
          </span>
        </div>
        <XpBar showLabels={false} />
      </div>
    </div>
  );
}
