"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cn } from "@/utils/classNames";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (pathname.includes("404")) {
    return children;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div
        className={cn(
          "min-h-screen bg-light-bg dark:bg-dark-bg bg-color-transition"
        )}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </div>
    </ThemeProvider>
  );
}