import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Spencer Delimas — full-stack & cloud engineer in Kenya building reliable systems, from web apps to the machines they run on. Case studies: deck, Heimdall, Grabit.";

export const metadata: Metadata = {
  metadataBase: new URL("https://spencerdelimas.vercel.app"),
  title: "Spencer Delimas | Full Stack & Cloud Engineer",
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Spencer Delimas",
    title: "Spencer Delimas | Full Stack & Cloud Engineer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Spencer Delimas | Full Stack & Cloud Engineer",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark'){document.documentElement.setAttribute('data-theme','dark')}}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="bg-grid" aria-hidden="true" />
        <MotionProvider>
          <Navbar />
          <main className="min-w-0">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
