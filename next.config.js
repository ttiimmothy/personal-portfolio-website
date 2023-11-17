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
              "connect-src 'self' vitals.vercel-insights.com https://vercel.live https://api.emailjs.com",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
