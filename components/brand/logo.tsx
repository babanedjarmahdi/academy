import { useId } from "react";
import { cn } from "@/lib/utils";
import { APP_NAME, APP_TAGLINE } from "@/lib/constants";

export function LogoMark({
  className,
  bare = false,
}: {
  className?: string;
  bare?: boolean;
}) {
  const uid = useId();
  const paint0 = `${uid}-paint0`;
  const paint1 = `${uid}-paint1`;
  const mask0 = `${uid}-mask0`;

  const svg = (
    <svg
      viewBox="8.5 12 14.5 18"
      fill="none"
      className={cn(bare ? "" : "h-full w-full", bare && className)}
      aria-hidden
    >
      <g transform="translate(8.5, 13)">
        <path
          d="M13.3 15.2 L2.34 1 V12.6"
          fill="none"
          stroke={`url(#${paint0})`}
          strokeWidth="1.86"
          mask={`url(#${mask0})`}
        />
        <path
          d="M11.825 1.5 V13.1"
          strokeWidth="1.86"
          stroke={`url(#${paint1})`}
        />
      </g>
      <defs>
        <linearGradient
          id={paint0}
          x1="9.95555"
          y1="11.1226"
          x2="15.4778"
          y2="17.9671"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.604072" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id={paint1}
          x1="11.8222"
          y1="1.40039"
          x2="11.791"
          y2="9.62542"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id={mask0}>
          <rect width="100%" height="100%" fill="white" />
          <rect width="5" height="1.5" fill="black" />
        </mask>
      </defs>
    </svg>
  );

  if (bare) return svg;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20",
        className
      )}
    >
      {svg}
    </div>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-10 w-10" />
      <div className="leading-tight">
        <p className="text-sm font-bold tracking-tight">{APP_NAME}</p>
        <p className="text-[11px] text-muted-foreground">{APP_TAGLINE}</p>
      </div>
    </div>
  );
}
