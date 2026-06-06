import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/our-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/our-services/:slug",
        destination: "/services/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
