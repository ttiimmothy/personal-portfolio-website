/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "connect-src 'self' vitals.vercel-insights.com https://vercel.live",
          },
        ],
      },
    ];
  },
  // output: "export",
  // trailingSlash: true,
  // distDir: "dist",
  // basePath: "/portfolio",
};

module.exports = nextConfig;
