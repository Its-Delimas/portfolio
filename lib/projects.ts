import { Waypoints, Rabbit, type LucideIcon } from "lucide-react";

export type ProjectSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type Screenshot = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  icon: LucideIcon;
  overview: string;
  sections: ProjectSection[];
  screenshots: Screenshot[];
};

export const projects: Project[] = [
  {
    slug: "heimdall",
    title: "Heimdall",
    tagline: "Live request-flow observability for a running microservice stack.",
    description:
      "Drop a small SDK into your services and Heimdall draws the live flow of a real request as it happens — which service called which, what shape of data moved, how long it took, and whether it errored.",
    highlights: [
      "Live WebSocket trace streaming",
      "MCP server for agent-queryable traces",
      "Schema inferred from real traffic, not code",
    ],
    tech: ["TypeScript", "Next.js", "Drizzle ORM", "PostgreSQL"],
    github: "https://github.com/Its-Delimas/heimdall",
    icon: Waypoints,
    overview:
      "A tool like a dependency graph or an IaC diagram shows what your code could call. Heimdall shows what it actually called, on a real request, just now — real hop count, real duration, real success/failure, real (shape-only, never values) payload keys. It's built for the moment right after wiring up a multi-service flow, so instead of reading three files to reconstruct what talks to what, you watch it happen.",
    sections: [
      {
        heading: "Pieces",
        items: [
          "SDK — Express middleware for inbound requests, traceFetch for outbound HTTP, traceQuery/span for DB calls, propagating one traceId across service boundaries.",
          "Server (collector) — ingests span events over HTTP, holds recent traces in memory per project, streams them live over WebSocket. Also an MCP server with seven read-only tools so an agent can ask what happened on the last request.",
          "DB — Postgres schema (Drizzle) for identity: users, sessions, organizations, projects, API keys. Trace data itself stays in-memory on the collector.",
          "Web — Next.js dashboard: live trace list, a flow diagram with click-for-payload-shape, a replay view, a cumulative services map, schema inferred from observed traffic, and analytics (p50/p95/p99 latency, per-service reliability).",
        ],
      },
      {
        heading: "Why it's different",
        body: "A static architecture diagram shows what your code could call. Heimdall shows what it actually called, on a real request, just now — including whether that hop errored and how long it took.",
      },
    ],
    screenshots: [
      { src: "/projects/heimdall/landing.jpg", alt: "Heimdall landing page with an animated live request-flow demo" },
      { src: "/projects/heimdall/overview.jpg", alt: "Heimdall overview dashboard showing trace count, error rate, and recent activity" },
      { src: "/projects/heimdall/flow.jpg", alt: "Heimdall flow diagram of a real request across checkout, inventory, and payments services" },
      { src: "/projects/heimdall/services.jpg", alt: "Heimdall cumulative services map across the whole observed system" },
      { src: "/projects/heimdall/schema.jpg", alt: "Heimdall database schema inferred from observed traffic" },
    ],
  },
  {
    slug: "grabit",
    title: "Grabit",
    tagline: "Turn a product posted on social media into a link people can pay for.",
    description:
      "The transaction layer that sits between \"I want this\" (seen on WhatsApp / Instagram / TikTok) and \"I bought this\" — the social network stays the discovery layer, Grabit handles checkout and delivery.",
    highlights: [
      "Domain-driven layered architecture",
      "Kenyan phone + delivery-zone pricing",
      "Paystack (M-Pesa/card) checkout",
    ],
    tech: ["Next.js", "TypeScript", "Prisma", "Paystack"],
    github: "https://github.com/Its-Delimas/grabit.co.ke",
    icon: Rabbit,
    overview:
      "A seller posts a product, gets a shareable link and caption, and a buyer who lands on that link can pick a size, choose a delivery zone, see the full price breakdown, and pay — by M-Pesa or card via Paystack — without ever leaving the flow. The seller tracks every order from a dashboard, from paid through delivered.",
    sections: [
      {
        heading: "How it works",
        items: [
          "Seller adds a product (name, price, photo, sizes) and publishes it — gets a shareable link and a ready-to-post caption.",
          "Buyer opens the link, picks a size and delivery zone, and sees the full price breakdown before paying.",
          "Checkout runs through Paystack (M-Pesa or card), with a mock provider available for local development.",
          "The seller's dashboard shows the order moving through its status — paid, packed, delivered — by order number.",
        ],
      },
      {
        heading: "Architecture",
        body: "Layered so business rules don't depend on Next.js: a framework-free domain layer (order status state machine, delivery-zone pricing, Kenyan phone-number normalization) underneath application use-cases (create-product, create-order, handle-payment-callback) and an infrastructure layer (Prisma, Auth.js, a swappable payment-provider abstraction, Cloudinary).",
      },
    ],
    screenshots: [
      { src: "/projects/grabit/landing.jpg", alt: "Grabit landing page — your social media is already your store" },
      { src: "/projects/grabit/product.jpg", alt: "Grabit buyer product page with colour and delivery options" },
      { src: "/projects/grabit/payment.jpg", alt: "Grabit payment method selector, secured by Paystack" },
      { src: "/projects/grabit/confirmation.jpg", alt: "Grabit order confirmation screen after a successful payment" },
      { src: "/projects/grabit/dashboard.jpg", alt: "Grabit seller dashboard with sales, orders, and a ready-to-post product card" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
