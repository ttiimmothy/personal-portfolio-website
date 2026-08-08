---
title: 使用 Next.js 建立 MDX 部落格
date: 2026-08-05T00:00:00Z
lang: zh-Hant
duration: 8min
description: 本作品集如何使用 Next.js、MDX、frontmatter 和共用元件建立簡潔的部落格。
---

MDX 讓你能以 Markdown 撰寫部落格文章，同時在需要互動式或可重複使用的 UI 時採用 React 元件。此作品集透過 Next.js App Router 搭配 MDX，讓文章緊鄰渲染它們的路由。

## 建立文章

每篇文章都有自己的目錄，內含 `page.mdx` 檔案：

```text
src/app/posts/
└── building-an-mdx-blog-with-nextjs/
    └── page.mdx
```

目錄名稱會成為文章 URL：

```text
/posts/building-an-mdx-blog-with-nextjs
```

文章以 YAML frontmatter 開始，其中包含文章標頭和文章索引所使用的中繼資料：

```mdx
---
title: Building an MDX Blog with Next.js
date: 2026-08-05T00:00:00Z
lang: en
duration: 8min
description: How this portfolio uses Next.js and MDX to create a simple blog.
---
```

Frontmatter 是中繼資料，因此不會作為文章內容的一部分呈現。

## 共用文章版面配置

MDX 設定使用 `mdx-components.tsx`，以相同版面配置包裝每篇文章：

```tsx
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => <PostLayout>{children}</PostLayout>,
    ...components,
  };
}
```

`PostLayout` 提供文章寬度、間距、深色模式樣式和共用文章標頭。因此，個別文章無須匯入版面配置，也不必重複撰寫標題與日期的標記。

文章標頭會讀取目前的 slug，並以 `gray-matter` 載入相符的 frontmatter。同一份中繼資料可由文章索引重複使用，無須維護另一份標題清單。

## 依年份列出文章

文章索引會在伺服器上掃描文章目錄，並解析每個 `page.mdx` 檔案：

```tsx
const { data } = matter(fs.readFileSync(filePath, "utf8"));

return {
  title: String(data.title ?? slug),
  href: `/posts/${slug}`,
  date: new Date(data.date),
};
```

文章會依日期排序並按年份分組。只要新增一個具有有效 frontmatter 的 MDX 目錄，文章就會出現在部落格索引正確的區段中。

## Markdown 樣式

Tailwind Typography 為標題、段落、清單、連結及其他長篇內容提供基礎樣式：

```tsx
<article className="prose prose-slate dark:prose-invert">
  {children}
</article>
```

將此樣式保留在單一共用元件中，可讓文章維持一致，同時讓寫作本身專注於內容。

## 語法突顯

圍欄程式碼區塊使用 `rehype-highlight` 進行語法突顯。開頭圍欄後方的語言會告訴突顯器應採用哪一種語法：

```ts
const postTitle = "Building an MDX Blog with Next.js";

export function getPostUrl(slug: string) {
  return `/posts/${slug}`;
}
```

`<pre>` 元素仍是生成 HTML 的一部分，因為它會保留換行和縮排。巢狀的 `<code>` 元素則會取得用於著色的語言和語法類別。

## 漸進式內容動畫

共用文章版面配置也會使用動畫元件包裝頂層 MDX 元素。每個元素都會取得遞增的索引，因而在段落、標題、清單和程式碼區塊之間產生細微的交錯效果。

```css
.mdx-content-item {
  opacity: 0;
  animation: mdx-content-enter 500ms ease-out forwards;
  animation-delay: calc(var(--mdx-index) * 80ms);
}
```

當訪客偏好減少動態效果時，動畫會停用：

```css
@media (prefers-reduced-motion: reduce) {
  .mdx-content-item {
    opacity: 1;
    animation: none;
  }
}
```

這讓效果保持細緻，並避免文章變得難以閱讀。

## 新增下一篇文章

若要新增另一篇文章：

1. 在 `src/app/posts` 下建立新目錄。
2. 新增 `page.mdx` 檔案。
3. 加入包含標題和日期的 frontmatter。
4. 使用 Markdown 或 MDX 撰寫文章。

例如：

```text
src/app/posts/my-next-post/page.mdx
```

無須新增文章索引項目或匯入共用版面配置。路由、中繼資料標頭、年份分組、排版、語法突顯及內容動畫皆由既有的 MDX 設定提供。

這為部落格帶來精簡的內容工作流程，同時讓每篇文章都易於撰寫和維護。

感謝閱讀。
