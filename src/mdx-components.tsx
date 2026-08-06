import type { MDXComponents } from "mdx/types";
import PostLayout from "@/components/posts/PostLayout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => <PostLayout>{children}</PostLayout>,
    ...components,
  };
}
