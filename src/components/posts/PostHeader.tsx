"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { PostMetadata } from "./postMetadata";

type PostHeaderProps = PostMetadata;

export default function PostHeader() {
  const pathname = usePathname();
  const [metadata, setMetadata] = useState<PostHeaderProps | null>(null);
  const segments = pathname.split("/").filter(Boolean);
  const isTraditionalChinese = segments[1] === "zh-hant";
  const slug = isTraditionalChinese ? segments[2] : segments[1];

  useEffect(() => {
    if (!slug || pathname === "/posts") {
      return;
    }

    const language = isTraditionalChinese ? "zh-Hant" : "en";

    fetch(`/api/posts/${slug}?lang=${language}`)
      .then((response) => (response.ok ? response.json() : null))
      .then((data: PostHeaderProps | null) => setMetadata(data))
      .catch(() => setMetadata(null));
  }, [pathname]);

  if (!metadata) {
    return null;
  }

  const { title, date, duration } = metadata;
  const formattedDate = date
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(new Date(date))
    : undefined;

  return (
    <header className="not-prose mb-12">
      <h1 className="text-3xl tracking-tight text-slate-900 dark:text-white md:text-5xl">
        {title}
      </h1>

      <nav
        aria-label="Post language"
        className="mt-4 flex gap-3 text-sm text-slate-500 dark:text-slate-400"
      >
        <Link
          href={`/posts/${slug}`}
          className={!isTraditionalChinese ? "font-medium text-slate-900 dark:text-white" : "hover:text-slate-900 dark:hover:text-white"}
        >
          English
        </Link>
        <Link
          href={`/posts/zh-hant/${slug}`}
          className={isTraditionalChinese ? "font-medium text-slate-900 dark:text-white" : "hover:text-slate-900 dark:hover:text-white"}
        >
          繁體中文
        </Link>
      </nav>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
        {formattedDate && <time dateTime={date}>{formattedDate}</time>}
        {duration && <span>{duration} read</span>}
      </div>
    </header>
  );
}
