"use client";

import { useCallback, useState } from "react";
import type { ReactNode } from "react";
import AnimatedMDXContent from "./AnimatedMDXContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default function PostLayout({ children }: { children: ReactNode }) {
  const [metadataLoaded, setMetadataLoaded] = useState(false);
  const handleMetadataLoaded = useCallback(() => setMetadataLoaded(true), []);

  return (
    <article
      className={`post-content prose prose-slate prose-headings:font-medium mx-auto min-h-screen max-w-3xl px-5 pb-20 pt-28 dark:prose-invert md:px-0${
        metadataLoaded ? "" : " invisible"
      }`}
    >
      <PostHeader onMetadataLoaded={handleMetadataLoaded} />
      <AnimatedMDXContent>{children}</AnimatedMDXContent>
      <PostFooter />
    </article>
  );
}
