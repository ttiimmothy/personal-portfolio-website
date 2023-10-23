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
              "default-src 'self'; img-src 'self' vitals.vercel-insights.com; script-src 'self' 'unsafe-inline'",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
