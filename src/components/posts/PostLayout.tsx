import type { ReactNode } from "react";
import AnimatedMDXContent from "./AnimatedMDXContent";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <article className="post-content prose prose-slate mx-auto min-h-screen max-w-3xl px-5 pb-20 pt-28 dark:prose-invert md:px-0">
      <PostHeader />
      <AnimatedMDXContent>{children}</AnimatedMDXContent>
      <PostFooter />
    </article>
  );
}
