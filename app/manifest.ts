import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Spencer Delimas · Software Engineer",
    short_name: "Spencer Delimas",
    description: "Founder of Grabbit and a software engineer in Nairobi.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5f0",
    theme_color: "#121117",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
