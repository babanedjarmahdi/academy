import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { AcademyProvider } from "@/context/academy-provider";
import { SyncProvider } from "@/context/sync-provider";
import { ToastViewport } from "@/components/shared/toast-viewport";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus",
  description:
    "From zero to expert in AI automation engineering — a hands-on curriculum with projects, XP, and achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <AcademyProvider>
          <SyncProvider>
            {children}
            <ToastViewport />
          </SyncProvider>
        </AcademyProvider>
      </body>
    </html>
  );
}
