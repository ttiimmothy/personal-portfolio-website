"use client";

import { Children, cloneElement, isValidElement, useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";

export default function AnimatedMDXContent({
  children,
}: {
  children: ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const content = contentRef.current;

    if (!content) {
      return;
    }

    const contentTop = content.getBoundingClientRect().top;

    content.querySelectorAll<HTMLElement>(".mdx-content-item").forEach((item) => {
      if (item.getBoundingClientRect().top - contentTop <= 2000) {
        item.classList.add("mdx-content-item-animated");
      }
    });
  }, []);

  return (
    <div ref={contentRef}>
      {Children.map(children, (child, index) => {
        if (!isValidElement<{ className?: string; style?: React.CSSProperties }>(child)) {
          return child;
        }

        return cloneElement(child, {
          className: `${child.props.className ?? ""} mdx-content-item`,
          style: {
            ...child.props.style,
            "--mdx-index": index,
          } as React.CSSProperties,
        });
      })}
    </div>
  );
}
