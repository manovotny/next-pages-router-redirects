/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/next-config-redirect",
        destination: "https://nextjs.org",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
