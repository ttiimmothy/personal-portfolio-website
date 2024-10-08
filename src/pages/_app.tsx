import type { AppProps } from "next/app";
import "@/globals.css";
import "@/index.css";
import "@/vertical-timeline-component/style.min.css";
import "@/projectsSection.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { colors } from "@/components/color/default";
import { cn } from "@/utils/classNames";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (["404"].some((errorCode) => router.pathname.includes(errorCode))) {
    return <Component {...pageProps} />;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className={cn("min-h-screen bg-light-bg dark:bg-dark-bg bg-color-transition")}>
        <Head>
          <title>Personal Portfolio</title>
        </Head>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </div>
    </ThemeProvider>
  );
}
