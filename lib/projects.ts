/**
 * Everything the portfolio says about the work. Facts only: each line here is
 * something that's live, in the code, or in a release.
 */

export type Shot = { src: string; alt: string; w: number; h: number; phone?: boolean };

export type ProjectLink = { label: string; href: string; kind: "live" | "github" | "download" };

export type Project = {
  slug: string;
  name: string;
  /** Spencer's part in it: shown as a chip. */
  role: string;
  /** Grouping on the page: the two products, or personal projects. */
  kind: "product" | "personal";
  year: string;
  status: string;
  /** One line: what it is. */
  pitch: string;
  /** Who it's for and what it changes for them. */
  problem: string;
  /** What was built, in plain words. */
  built: string[];
  /** The engineering that took thought. */
  hard: string[];
  /** Small true numbers. */
  facts: { value: string; label: string }[];
  stack: string[];
  links: ProjectLink[];
  /** First is the hero image; a phone shot is shown on top of it. */
  shots: Shot[];
};

const D = (src: string, alt: string): Shot => ({ src, alt, w: 2880, h: 1800 });
const P = (src: string, alt: string): Shot => ({ src, alt, w: 780, h: 1688, phone: true });

export const projects: Project[] = [
  {
    slug: "grabbit",
    name: "Grabbit",
    role: "Founder & engineer",
    kind: "product",
    year: "2026",
    status: "Live at grabbit.co.ke",
    pitch: "An M‑Pesa checkout behind anything a Kenyan seller posts on WhatsApp, Instagram or TikTok.",
    problem:
      "Most small sellers in Kenya sell from their phones: a photo on Instagram, then a long chat to agree on price, delivery and payment, then chasing the M‑Pesa message. Every step loses buyers. Grabbit gives each post a link where a buyer picks options, chooses delivery, and pays with an M‑Pesa prompt, and the money lands straight in the seller's own till.",
    built: [
      "Seller side: sign-up, onboarding with county-based delivery areas, adding items one at a time or in batches, and a dashboard grouped by what to pack, send and chase.",
      "Buyer side: a photo album of everything a seller has, item pages with options, a bag that pays for several items with one M‑Pesa prompt, and a live order page.",
      "Payouts to a till, paybill or bank account, verified by Grabbit before any money moves, plus weekly seller bills paid with one tap.",
      "An admin control room for money, orders, sellers and growth, and an installable app with an offline page.",
    ],
    hard: [
      "Real M‑Pesa payments through PayHero: payment callbacks aren't signed, so every prompt carries its own signed callback address, and a payment is confirmed with PayHero's status lookup before an order counts as paid.",
      "Idempotent payment handling: duplicate callbacks, prompts resent by the buyer, and amounts that don't match are all recorded and handled safely.",
      "Stock that can't be oversold: an item is held while a buyer is at the M‑Pesa prompt and released if they walk away.",
      "Each seller's till registered as their own payment channel through the PayHero API, so money never passes through Grabbit.",
      "Layered code: business rules (order states, fees, Kenyan phone numbers, billing weeks) live apart from the framework and are covered by 140+ automated tests, including database tests.",
    ],
    facts: [
      { value: "Live", label: "real M‑Pesa payments" },
      { value: "KSh 0", label: "held by Grabbit: buyers pay sellers directly" },
      { value: "140+", label: "automated tests" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "PayHero / M‑Pesa", "Auth.js", "Vercel", "Neon"],
    links: [{ label: "Visit grabbit.co.ke", href: "https://grabbit.co.ke", kind: "live" }],
    shots: [
      D("/projects/grabbit/landing.jpg", "Grabbit's home page: Post it. They grab it. You get paid."),
      P("/projects/grabbit/item-phone.jpg", "A Grabbit item page on a phone, with the price and how to get it"),
      { src: "/projects/grabbit/bills-crop.jpg", alt: "A seller's bill on Grabbit, paid with one M-Pesa prompt", w: 1620, h: 1650 },
      P("/projects/grabbit/album-phone.jpg", "A seller's Grabbit album on a phone"),
      D("/projects/grabbit/signup.jpg", "Grabbit sign-up, with real products behind it"),
    ],
  },
  {
    slug: "nurulabs",
    name: "NuruLabs",
    role: "Creator & engineer",
    kind: "product",
    year: "2026",
    status: "Live at nurulabs.vercel.app",
    pitch: "Free, hands-on AI education for African students, with real Python running in the browser.",
    problem:
      "Learning AI usually means hour-long videos, a powerful laptop and a fast connection. NuruLabs is a structured programme where every idea is followed straight away by something you do, on data from African farms, clinics and markets, and it runs in the browser on any laptop.",
    built: [
      "Four tracks, Python Essentials, Data Science, Data Engineering and AI & Machine Learning, each a syllabus of modules ending in a milestone.",
      "Labs that mix short lessons, interactives, quizzes, real code and a reflection in the learner's own words.",
      "A placement check so experienced learners can skip ahead, and a dashboard with progress, the path ahead and a streak.",
      "Optional sign-in with Google or an emailed link, with progress kept on the device without an account.",
    ],
    hard: [
      "Python in the browser: Pyodide runs in a Web Worker with a self-hosted interpreter, and libraries like NumPy, pandas, matplotlib and scikit-learn load only when a lab needs them.",
      "One Python harness shared by the browser and a content checker, so every lab's exercises and solutions are verified automatically.",
      "Progress that merges cleanly between a device and an account when a learner signs in later.",
    ],
    facts: [
      { value: "4", label: "learning tracks" },
      { value: "139", label: "hands-on labs" },
      { value: "1,100+", label: "lessons and exercises" },
    ],
    stack: ["Next.js", "TypeScript", "Pyodide", "Web Workers", "CodeMirror", "Supabase", "Tailwind CSS"],
    links: [
      { label: "Visit NuruLabs", href: "https://nurulabs.vercel.app", kind: "live" },
      { label: "Source", href: "https://github.com/Its-Delimas/nurulabs", kind: "github" },
    ],
    shots: [
      D("/projects/nurulabs/landing.jpg", "NuruLabs home page: Africa's AI builders start here"),
      P("/projects/nurulabs/landing-phone.jpg", "NuruLabs on a phone"),
      D("/projects/nurulabs/dashboard.jpg", "A learner's NuruLabs dashboard with the next lab and their path"),
      D("/projects/nurulabs/lab.jpg", "A NuruLabs lab: Values and Variables"),
      D("/projects/nurulabs/tracks.jpg", "The four NuruLabs tracks"),
    ],
  },
  {
    slug: "deck",
    name: "deck",
    role: "Personal project",
    kind: "personal",
    year: "2026",
    status: "v0.1.0 for Linux, Windows and macOS",
    pitch: "A native desktop app that answers what's happening on a developer's machine.",
    problem:
      "What's eating the CPU, what's listening on port 3000, which services are running, where the disk went: usually six terminal windows. deck puts it in one app.",
    built: [
      "Live CPU, memory, GPU, disk and network, with one ranked list of anything that needs attention.",
      "Every listening port joined to the process and the project folder that owns it.",
      "Services, logs and a real terminal; one repository tracked as a unit with its total cost.",
    ],
    hard: [
      "Process and socket tables read straight from /proc, with metrics pushed from Go on a fixed tick so it stays cheap to leave open.",
      "Every hardware value shows where it came from; anything the hardware doesn't report is marked unavailable, never guessed.",
      "A tag-triggered release pipeline that builds a .deb, a tarball, a Windows installer and a macOS app.",
    ],
    facts: [
      { value: "3", label: "operating systems" },
      { value: "v0.1.0", label: "released" },
    ],
    stack: ["Go", "Wails", "React", "TypeScript"],
    links: [
      { label: "Source", href: "https://github.com/Its-Delimas/deck", kind: "github" },
      { label: "Download", href: "https://github.com/Its-Delimas/deck/releases/latest", kind: "download" },
    ],
    shots: [
      { src: "/projects/deck/dashboard.jpg", alt: "deck dashboard with live CPU, memory, network and disk", w: 1600, h: 868 },
      { src: "/projects/deck/network.jpg", alt: "deck mapping listening ports to processes and projects", w: 1600, h: 868 },
      { src: "/projects/deck/processes.jpg", alt: "deck process manager", w: 1600, h: 868 },
      { src: "/projects/deck/logs.jpg", alt: "deck streaming the system journal", w: 1600, h: 872 },
      { src: "/projects/deck/about.jpg", alt: "deck hardware inventory with sources", w: 1600, h: 872 },
    ],
  },
  {
    slug: "heimdall",
    name: "Heimdall",
    role: "Personal project",
    kind: "personal",
    year: "2026",
    status: "Working MVP with CI",
    pitch: "Watch a real request travel through your microservices, live.",
    problem:
      "After wiring up several services, finding out what actually calls what means reading code across repositories. Heimdall draws the real path of a real request as it happens: which service called which, how long each hop took, and where it failed.",
    built: [
      "A small SDK for Node services that follows one request across service boundaries.",
      "A collector that streams traces live over WebSocket, and an MCP server so an AI agent can ask what happened on the last request.",
      "A dashboard with the live flow, replays, a services map and latency percentiles.",
    ],
    hard: [
      "Payload shapes captured without ever storing values.",
      "Database schema inferred from real traffic rather than code.",
    ],
    facts: [{ value: "Live", label: "WebSocket tracing" }],
    stack: ["TypeScript", "Next.js", "PostgreSQL", "Drizzle", "WebSockets"],
    links: [{ label: "Source", href: "https://github.com/Its-Delimas/heimdall", kind: "github" }],
    shots: [
      { src: "/projects/heimdall/flow.jpg", alt: "Heimdall drawing a request across checkout, inventory and payments", w: 1568, h: 706 },
      { src: "/projects/heimdall/overview.jpg", alt: "Heimdall overview dashboard", w: 1568, h: 706 },
      { src: "/projects/heimdall/services.jpg", alt: "Heimdall services map", w: 1568, h: 706 },
      { src: "/projects/heimdall/schema.jpg", alt: "Heimdall schema inferred from traffic", w: 1568, h: 706 },
    ],
  },
];

export const products = projects.filter((p) => p.kind === "product");
export const personal = projects.filter((p) => p.kind === "personal");

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
