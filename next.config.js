import nextMdx from "@next/mdx";
import remarkFrontmatter from "remark-frontmatter";

function removeFrontmatter() {
  return (tree) => {
    tree.children = tree.children.filter((node) => node.type !== "yaml");
  };
}

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: ["remark-frontmatter", "rehype-highlight"],
  },
});

const nextConfig = withMdx({
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "connect-src 'self' vitals.vercel-insights.com https://vercel.live https://api.emailjs.com",
          },
        ],
      },
    ];
  },
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
});

export default nextConfig
