import type { AppProps } from "next/app";
import "@/globals.css";
import "@/index.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (["404"].some((errorCode) => router.pathname.includes(errorCode)))
    return <Component {...pageProps} />;

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-slate-50 dark:bg-slate-800">
        <Head>
          <title>Timothy</title>
        </Head>
        {/* <Navbar /> */}
        <Component {...pageProps} />
        <Analytics />
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}
