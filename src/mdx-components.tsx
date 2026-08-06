import type { ComponentProps } from "react";
import type { MDXComponents } from "mdx/types";
import PostLayout from "@/components/posts/PostLayout";

function MDXLink(props: ComponentProps<"a">) {
  return <a {...props} target="_blank" rel="noopener noreferrer" />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: MDXLink,
    wrapper: ({ children }) => <PostLayout>{children}</PostLayout>,
    ...components,
  };
}
