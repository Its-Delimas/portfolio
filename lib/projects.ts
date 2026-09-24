import { Waypoints, Rabbit, MonitorDot, type LucideIcon } from "lucide-react";

export type ProjectSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type Screenshot = {
  src: string;
  alt: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: "github" | "download";
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  kind: string;
  platform: string;
  status: string;
  year: string;
  highlights: string[];
  tech: string[];
  links: ProjectLink[];
  icon: LucideIcon;
  overview: string;
  sections: ProjectSection[];
  screenshots: Screenshot[];
};

export const projects: Project[] = [
  {
    slug: "deck",
    title: "deck",
    tagline: "A native developer system monitor and environment manager.",
    description:
      "What's eating the CPU, what's listening on port 3000, which services are running, where the disk went — answered in one desktop app instead of six terminal windows.",
    kind: "Desktop app",
    platform: "Linux · Windows · macOS",
    status: "v0.1.0 released",
    year: "2026",
    highlights: [
      "Every listening port joined to its process and project",
      "Real PTY terminal, journald + Docker log streaming",
      "Hardware inventory that cites the source of every value",
    ],
    tech: ["Go", "Wails", "React", "TypeScript"],
    links: [
      { label: "Source", href: "https://github.com/Its-Delimas/deck", kind: "github" },
      { label: "Download v0.1.0", href: "https://github.com/Its-Delimas/deck/releases/latest", kind: "download" },
    ],
    icon: MonitorDot,
    overview:
      "deck answers the questions you actually have about your development machine in one place. Ports are translated into meaning — 5173 → vite → chromafinity instead of a raw socket table — processes come with their trees and working directories, and pointing it at a repository tracks everything that project started as one unit. Metrics are pushed from Go on a fixed tick and the process and socket tables are read straight from /proc, so leaving it open all day stays cheap.",
    sections: [
      {
        heading: "What it does",
        items: [
          "Dashboard — CPU, memory, GPU, disk and network with live charts, per-core load, thermals and one ranked list of anything that needs attention.",
          "Processes and network — a full process manager with trees, detail and signal control, and every listening socket joined to its owning process and project directory.",
          "Services, logs and terminal — PostgreSQL, Redis and Docker containers from systemd and Docker with start/stop/restart; journald and container logs streamed live; real PTY sessions.",
          "Project mode — the processes, ports, git state and scripts of one repository tracked as a single unit, with its total CPU and memory cost.",
          "This machine and health check — a full hardware inventory plus live measurements: real load on every core with throttling sampled, memory bandwidth, and a 128 MB disk write and read-back.",
        ],
      },
      {
        heading: "Honest by design",
        body: "Every value in the hardware inventory shows the /sys path or command it came from, and anything the hardware doesn't report is marked unavailable rather than filled in with a guess. Battery health is the firmware's measured full charge against its design capacity — the kind of thing you want when checking a second-hand machine.",
      },
      {
        heading: "Architecture",
        body: "A React and TypeScript interface on Wails v2, with Go doing all system access — events flow in, bound methods flow out. Platform-specific code sits behind build tags with Linux as the first-class target, and a tag-triggered release pipeline builds and publishes a .deb, a tarball, a Windows installer and a universal macOS binary.",
      },
    ],
    screenshots: [
      { src: "/projects/deck/dashboard.jpg", alt: "deck dashboard with live CPU, memory, network and disk charts" },
      { src: "/projects/deck/processes.jpg", alt: "deck process manager with search, sorting and a detail pane" },
      { src: "/projects/deck/network.jpg", alt: "deck network view mapping listening ports to processes and projects" },
      { src: "/projects/deck/about.jpg", alt: "deck hardware inventory with sources and battery health" },
      { src: "/projects/deck/logs.jpg", alt: "deck streaming the system journal with severities and units" },
    ],
  },
  {
    slug: "heimdall",
    title: "Heimdall",
    tagline: "Live request-flow observability for a running microservice stack.",
    description:
      "Drop a small SDK into your services and Heimdall draws the live flow of a real request as it happens — which service called which, what shape of data moved, how long it took, and whether it errored.",
    kind: "Observability platform",
    platform: "Web dashboard · Node SDK",
    status: "Working MVP with CI",
    year: "2026",
    highlights: [
      "Live WebSocket trace streaming",
      "MCP server for agent-queryable traces",
      "Schema inferred from real traffic, not code",
    ],
    tech: ["TypeScript", "Next.js", "Drizzle ORM", "PostgreSQL"],
    links: [{ label: "Source", href: "https://github.com/Its-Delimas/heimdall", kind: "github" }],
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
      { src: "/projects/heimdall/flow.jpg", alt: "Heimdall flow diagram of a real request across checkout, inventory, and payments services" },
      { src: "/projects/heimdall/overview.jpg", alt: "Heimdall overview dashboard showing trace count, error rate, and recent activity" },
      { src: "/projects/heimdall/landing.jpg", alt: "Heimdall landing page with an animated live request-flow demo" },
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
    kind: "Social commerce",
    platform: "Web · mobile-first",
    status: "MVP",
    year: "2026",
    highlights: [
      "Domain-driven layered architecture",
      "Kenyan phone + delivery-zone pricing",
      "Paystack (M-Pesa/card) checkout",
    ],
    tech: ["Next.js", "TypeScript", "Prisma", "Paystack"],
    links: [{ label: "Source", href: "https://github.com/Its-Delimas/grabit.co.ke", kind: "github" }],
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

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
