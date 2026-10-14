import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // screenshots are the work: let them through sharper than the default
  images: { qualities: [75, 85] },
};

export default nextConfig;
