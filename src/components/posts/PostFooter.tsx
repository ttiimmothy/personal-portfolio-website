"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type PostLink = {
  title: string;
  href: string;
};

type PostNavigation = {
  previous?: PostLink;
  next?: PostLink;
};

export default function PostFooter() {
  const pathname = usePathname();
  const [navigation, setNavigation] = useState<PostNavigation | null>(null);

  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    const isTraditionalChinese = segments[1] === "zh-hant";
    const slug = isTraditionalChinese ? segments[2] : segments[1];

    if (!slug || pathname === "/posts") {
      return;
    }

    const language = isTraditionalChinese ? "zh-Hant" : "en";

    fetch(`/api/posts/${slug}/navigation?lang=${language}`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data: PostNavigation | null) => setNavigation(data))
      .catch(() => setNavigation(null));
  }, [pathname]);

  if (!navigation?.previous && !navigation?.next) {
    return null;
  }

  return (
    <footer className="not-prose mt-16 grid grid-cols-2 gap-6 hover:text-gray-900 dark:hover:text-gray-100">
      {navigation.previous ? (
        <Link
          href={navigation.previous.href}
          className="group min-w-0 text-left"
        >
          <span className="block text-sm truncate">← {navigation.previous.title}</span>
        </Link>
      ) : (
        <span />
      )}

      {navigation.next && (
        <Link
          href={navigation.next.href}
          className="group min-w-0 text-right"
        >
          <span className="block text-sm truncate">{navigation.next.title} →</span>
        </Link>
      )}
    </footer>
  );
}
