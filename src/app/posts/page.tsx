import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import matter from "gray-matter";

type Post = {
  title: string;
  href: string;
  date?: Date;
  duration?: string;
};

function getPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), "src/app/posts");

  return fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== "zh-hant")
    .map((entry) => {
      const slug = entry.name;
      const filePath = path.join(postsDirectory, slug, "page.mdx");
      const { data } = matter(fs.readFileSync(filePath, "utf8"));
      const date = data.date ? new Date(data.date) : undefined;

      return {
        title: String(data.title ?? slug),
        href: `/posts/${slug}`,
        date: date && !Number.isNaN(date.getTime()) ? date : undefined,
        duration: data.duration ? String(data.duration) : undefined,
      };
    })
    .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));
}

function groupPostsByYear(posts: Post[]) {
  return posts.reduce<Record<string, Post[]>>((groups, post) => {
    const year = post.date ? String(post.date.getFullYear()) : "Unknown";
    groups[year] ??= [];
    groups[year].push(post);
    return groups;
  }, {});
}

export default function PostsPage() {
  const groups = groupPostsByYear(getPosts());
  const years = Object.keys(groups).sort((a, b) => {
    if (a === "Unknown") return 1;
    if (b === "Unknown") return -1;
    return Number(b) - Number(a);
  });

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-5 pb-20 pt-28 md:px-0">
      <header className="mb-12">
        <h2 className="mb-3 text-4xl uppercase">Blog</h2>
      </header>

      <div className="space-y-10">
        {years.map((year) => (
          <section key={year} aria-labelledby={`posts-${year}`}>
            <h3
              id={`posts-${year}`}
              className="mb-3 text-xl"
            >
              {year}
            </h3>

            <div>
              {groups[year].map((post) => (
                <article key={post.href}>
                  <Link
                    href={post.href}
                    className="flex w-full items-center gap-4 py-3 text-md transition opacity-70 hover:opacity-100"
                  >
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {post.title}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {post.date && new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }).format(post.date)}
                      {post.duration && ` · ${post.duration}`}
                      {" · en / 繁體中文"}
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
