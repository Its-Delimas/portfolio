import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

/** Baloo 2, the face Grabbit is set in: headlines and big numbers. */
const display = localFont({
  src: [{ path: "./fonts/baloo2-var.woff2", weight: "400 800", style: "normal" }],
  variable: "--font-display-src",
  display: "swap",
});

const description =
  "Spencer Delimas, founder of Grabbit and a software engineer in Nairobi. I build complete products: Grabbit (M-Pesa checkout for social sellers, live), NuruLabs (AI education with Python in the browser) and deck (a native developer tool).";

export const metadata: Metadata = {
  metadataBase: new URL("https://spencerdelimas.vercel.app"),
  title: "Spencer Delimas · Founder of Grabbit · Software Engineer",
  description,
  keywords: ["Spencer Delimas", "Grabbit", "NuruLabs", "software engineer Kenya", "full-stack developer Nairobi", "M-Pesa integration"],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Spencer Delimas",
    title: "Spencer Delimas · Founder of Grabbit · Software Engineer",
    description,
    locale: "en_KE",
  },
  twitter: { card: "summary_large_image", title: "Spencer Delimas · Founder of Grabbit", description },
};

export const viewport: Viewport = { themeColor: "#0a0a0a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE" className={display.variable}>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
