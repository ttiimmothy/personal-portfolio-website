---
title: Building an MDX Blog with Next.js
date: 2026-08-05T00:00:00Z
lang: en
duration: 8min
description: How this portfolio uses Next.js, MDX, frontmatter, and shared components to create a simple blog.
---

MDX makes it possible to write a blog post with Markdown while still using React components when interactive or reusable UI is needed. This portfolio uses MDX with the Next.js App Router to keep posts close to the routes that render them.

## Creating a post

Each post lives in its own directory with a `page.mdx` file:

```text
src/app/posts/
└── building-an-mdx-blog-with-nextjs/
    └── page.mdx
```

The directory name becomes the post URL:

```text
/posts/building-an-mdx-blog-with-nextjs
```

The post starts with YAML frontmatter. It contains metadata used by the post header and the posts index:

```mdx
---
title: Building an MDX Blog with Next.js
date: 2026-08-05T00:00:00Z
lang: en
duration: 8min
description: How this portfolio uses Next.js and MDX to create a simple blog.
---
```

The frontmatter is metadata, so it is not rendered as part of the article content.

## A shared post layout

The MDX setup uses `mdx-components.tsx` to wrap every post with the same layout:

```tsx
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => <PostLayout>{children}</PostLayout>,
    ...components,
  };
}
```

`PostLayout` provides the article width, spacing, dark-mode styles, and shared post header. This means individual posts do not need to import a layout or repeat their title and date markup.

The post header reads the current slug and loads the matching frontmatter with `gray-matter`. The same metadata can be reused by the posts index without maintaining a separate list of titles.

## Listing posts by year

The posts index scans the post directories on the server and parses each `page.mdx` file:

```tsx
const { data } = matter(fs.readFileSync(filePath, "utf8"));

return {
  title: String(data.title ?? slug),
  href: `/posts/${slug}`,
  date: new Date(data.date),
};
```

Posts are sorted by date and grouped by year. Adding a new MDX directory with valid frontmatter is enough for it to appear in the correct section of the blog index.

## Styled Markdown

Tailwind Typography provides the base styling for headings, paragraphs, lists, links, and other long-form content:

```tsx
<article className="prose prose-slate dark:prose-invert">
  {children}
</article>
```

Keeping this styling in one shared component makes the posts consistent while leaving the writing itself focused on content.

## Syntax highlighting

Fenced code blocks are highlighted with `rehype-highlight`. The language after the opening fence tells the highlighter which syntax to use:

```ts
const postTitle = "Building an MDX Blog with Next.js";

export function getPostUrl(slug: string) {
  return `/posts/${slug}`;
}
```

The `<pre>` element remains part of the generated HTML because it preserves line breaks and indentation. The nested `<code>` element receives the language and syntax classes used for coloring.

## Gradual content animation

The shared post layout also wraps top-level MDX elements with an animation component. Each element receives an increasing index, which creates a small stagger between paragraphs, headings, lists, and code blocks.

```css
.mdx-content-item {
  opacity: 0;
  animation: mdx-content-enter 500ms ease-out forwards;
  animation-delay: calc(var(--mdx-index) * 80ms);
}
```

The animation is disabled when a visitor prefers reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .mdx-content-item {
    opacity: 1;
    animation: none;
  }
}
```

This keeps the effect subtle and avoids making the article difficult to read.

## Adding the next post

To add another article:

1. Create a new directory under `src/app/posts`.
2. Add a `page.mdx` file.
3. Add frontmatter with a title and date.
4. Write the article in Markdown or MDX.

For example:

```text
src/app/posts/my-next-post/page.mdx
```

No posts index entry or shared layout import is required. The route, metadata header, year grouping, typography, syntax highlighting, and content animation are provided by the existing MDX setup.

That gives the blog a small content workflow while keeping each article easy to write and maintain.

Thanks for reading.
