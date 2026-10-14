import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/lib/site";

/** Baloo 2 for headlines and big numbers. */
const display = localFont({
  src: [{ path: "./fonts/baloo2-var.woff2", weight: "400 800", style: "normal" }],
  variable: "--font-display-src",
  display: "swap",
});

const description =
  "Spencer Delimas, founder of Grabbit and a software engineer in Nairobi. I build complete products: Grabbit (M-Pesa checkout for social sellers, live), NuruLabs (AI education with Python in the browser) and deck (a native developer tool).";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Spencer Delimas · Founder of Grabbit · Software Engineer",
  description,
  // Google ignores this tag; Bing and others still glance at it
  keywords: [
    "Spencer Delimas",
    "Spencer Delimas software engineer",
    "Spencer Delimas Grabbit",
    "Grabbit founder",
    "Grabbit Kenya",
    "NuruLabs",
    "software engineer Kenya",
    "software engineer Nairobi",
    "full-stack developer Kenya",
    "full-stack developer Nairobi",
    "Next.js developer Kenya",
    "TypeScript developer Nairobi",
    "M-Pesa integration developer",
    "Daraja PayHero integration",
    "AWS Solutions Architect Kenya",
    "Linux",
    "Dedan Kimathi University of Technology",
  ],
  authors: [{ name: "Spencer Delimas", url: "https://github.com/Its-Delimas" }],
  creator: "Spencer Delimas",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    // the card itself comes from app/opengraph-image.tsx
    siteName: "Spencer Delimas",
    title: "Spencer Delimas · Founder of Grabbit · Software Engineer",
    description,
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image", title: "Spencer Delimas · Founder of Grabbit", description },
};

export const viewport: Viewport = { themeColor: "#121117", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE" data-scroll-behavior="smooth" className={display.variable}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
