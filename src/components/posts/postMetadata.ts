import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMetadata = {
  title: string;
  date?: string;
  lang?: string;
  duration?: string;
  description?: string;
};

export type PostLink = {
  title: string;
  href: string;
};

export type PostLanguage = "en" | "zh-Hant";

const localizedPostDirectory = "zh-hant";

function getPostDirectory(slug: string, language: PostLanguage) {
  return language === "zh-Hant"
    ? path.join(process.cwd(), "src/app/posts", localizedPostDirectory, slug)
    : path.join(process.cwd(), "src/app/posts", slug);
}

export function getPostMetadata(
  slug: string,
  language: PostLanguage = "en"
): PostMetadata {
  const filePath = path.join(getPostDirectory(slug, language), "page.mdx");
  const source = fs.readFileSync(filePath, "utf8");
  const { data } = matter(source);

  return {
    title: String(data.title ?? slug),
    date: data.date ? String(data.date) : undefined,
    lang: data.lang ? String(data.lang) : undefined,
    duration: data.duration ? String(data.duration) : undefined,
    description: data.description ? String(data.description) : undefined,
  };
}

export function getPostNavigation(slug: string, language: PostLanguage = "en") {
  const postsDirectory = getPostDirectory("", language);
  const posts = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        (language === "zh-Hant" || entry.name !== localizedPostDirectory)
    )
    .map((entry) => {
      const postSlug = entry.name;
      const metadata = getPostMetadata(postSlug, language);
      const date = metadata.date ? new Date(metadata.date) : undefined;

      return {
        slug: postSlug,
        title: metadata.title,
        date: date && !Number.isNaN(date.getTime()) ? date : undefined,
      };
    })
    .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));

  const currentIndex = posts.findIndex((post) => post.slug === slug);
  const prefix = language === "zh-Hant" ? `/posts/${localizedPostDirectory}` : "/posts";

  if (currentIndex === -1) {
    return { previous: undefined, next: undefined };
  }

  const toLink = (index: number): PostLink | undefined => {
    const post = posts[index];
    return post
      ? { title: post.title, href: `${prefix}/${post.slug}` }
      : undefined;
  };

  return {
    previous: toLink(currentIndex + 1),
    next: toLink(currentIndex - 1),
  };
}
