import type { Metadata } from "next";
import "./index.css";
import "./globals.css";
import "./projectsSection.css";
import "highlight.js/styles/github-dark.css";
import "@/vertical-timeline-component/style.min.css";
import Providers from "./providers";
import Layout from "@/components/Layout";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YSZZPD1NFX"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YSZZPD1NFX');
        `}
      </Script>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}