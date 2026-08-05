import type { Metadata } from "next";
import "./index.css";
import "./globals.css";
import "./projectsSection.css";
import "@/vertical-timeline-component/style.min.css";
import Providers from "./providers";
import Layout from "@/components/Layout";

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
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}