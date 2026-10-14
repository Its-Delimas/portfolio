/**
 * Everything the portfolio says about the work. Facts only, and short. The
 * home page shows the pitch and the numbers; the rest is on each project's
 * own page for whoever wants it. Nothing here describes how a product's
 * security works inside, only what it guarantees.
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
  /** Two or three sentences: who it's for and what it changes. */
  problem: string;
  /** What was built, one short line each. */
  built: string[];
  /** What it guarantees or does well, one short line each. */
  hard: string[];
  /** Small true numbers. */
  facts: { value: string; label: string }[];
  /** The product's own wordmark, linking to it. */
  logo?: { src: string; w: number; h: number; href: string };
  /** A note shown on the project's page, e.g. what a beta is checking. */
  notice?: { title: string; body: string };
  stack: string[];
  links: ProjectLink[];
  /** First is the main laptop screen; the first phone shot is shown on phones. */
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
      "Small sellers in Kenya sell from their phones, and every sale is a long chat: price, delivery, then chasing the M‑Pesa message. Grabbit turns a post into a link where the buyer picks, pays with an M‑Pesa prompt, and the money lands in the seller's own till.",
    built: [
      "Seller onboarding, products and a dashboard for orders, stock and bills",
      "A shop page, item pages and a bag that pays for several items at once",
      "Payouts to a till, paybill or bank account",
      "An admin control room and an installable app",
    ],
    hard: [
      "Real M‑Pesa payments, confirmed before an order counts as paid",
      "Every payment recorded exactly once",
      "Items can't be sold twice while a buyer is paying",
      "Buyers pay sellers directly; Grabbit never holds the money",
      "140+ automated tests on the rules that touch money",
    ],
    facts: [
      { value: "Live", label: "real M‑Pesa payments" },
      { value: "KSh 0", label: "held by Grabbit" },
      { value: "140+", label: "automated tests" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "M‑Pesa", "Vercel"],
    links: [{ label: "Visit grabbit.co.ke", href: "https://grabbit.co.ke", kind: "live" }],
    logo: { src: "/brand/grabbit-wordmark.svg", w: 1642, h: 456, href: "https://grabbit.co.ke" },
    shots: [
      D("/projects/grabbit/landing.jpg", "Grabbit's home page: Post it. They grab it. You get paid."),
      P("/projects/grabbit/item-phone.jpg", "A Grabbit item page on a phone"),
      D("/projects/grabbit/signup.jpg", "Grabbit sign-up, with real products behind it"),
      P("/projects/grabbit/album-phone.jpg", "A seller's Grabbit shop page on a phone"),
    ],
  },
  {
    slug: "nurulabs",
    name: "NuruLabs",
    role: "Creator & engineer",
    kind: "product",
    year: "2026",
    status: "Beta · nurulabs.vercel.app",
    notice: {
      title: "In beta: checking every lesson",
      body: "NuruLabs is open, and in beta while its content engine is validated: every lesson and exercise is being checked so that what's taught is correct and every lab stays hands-on, with learners doing, not just reading. The full launch follows once that check is done.",
    },
    pitch: "Free, hands-on AI education for African students, with real Python running in the browser.",
    problem:
      "Learning AI usually means long videos, a powerful laptop and a fast connection. NuruLabs is a structured programme where every idea is followed by something you do, on African data, in the browser on any laptop.",
    built: [
      "Four tracks, from Python to machine learning",
      "Labs that mix lessons, interactives, quizzes and real code",
      "A placement check and a progress dashboard",
      "Optional sign-in, with progress kept on the device",
    ],
    hard: [
      "Python, NumPy and pandas running in the browser, no install",
      "Every lab's exercises checked automatically",
      "Progress that follows a learner from device to account",
    ],
    facts: [
      { value: "4", label: "learning tracks" },
      { value: "139", label: "hands-on labs" },
      { value: "1,100+", label: "lessons and exercises" },
    ],
    stack: ["Next.js", "TypeScript", "Pyodide", "Supabase", "Tailwind CSS"],
    links: [
      { label: "Visit NuruLabs", href: "https://nurulabs.vercel.app", kind: "live" },
      { label: "Source", href: "https://github.com/Its-Delimas/nurulabs", kind: "github" },
    ],
    shots: [
      D("/projects/nurulabs/landing.jpg", "NuruLabs home page: Africa's AI builders start here"),
      P("/projects/nurulabs/landing-phone.jpg", "NuruLabs on a phone"),
      D("/projects/nurulabs/dashboard.jpg", "A learner's NuruLabs dashboard"),
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
    status: "v0.1.0 · Linux, Windows, macOS",
    pitch: "A desktop app that shows what's happening on a developer's machine.",
    problem:
      "What's using the CPU, what's on port 3000, which services are running: usually six terminal windows. deck puts it in one app.",
    built: [
      "Live system charts and one list of what needs attention",
      "Every open port linked to its process and project",
      "Services, logs and a terminal in one place",
    ],
    hard: [
      "Light enough to leave open all day",
      "Hardware details always show their source",
      "One release builds for three operating systems",
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
      { src: "/projects/deck/dashboard.jpg", alt: "deck dashboard with live system charts", w: 1600, h: 868 },
      { src: "/projects/deck/network.jpg", alt: "deck linking open ports to processes", w: 1600, h: 868 },
      { src: "/projects/deck/processes.jpg", alt: "deck process manager", w: 1600, h: 868 },
      { src: "/projects/deck/logs.jpg", alt: "deck streaming system logs", w: 1600, h: 872 },
      { src: "/projects/deck/about.jpg", alt: "deck hardware details", w: 1600, h: 872 },
    ],
  },
  {
    slug: "heimdall",
    name: "Heimdall",
    role: "Personal project",
    kind: "personal",
    year: "2026",
    status: "Working MVP",
    pitch: "Watch a real request travel through your microservices, live.",
    problem:
      "Finding out what actually calls what across services means reading a lot of code. Heimdall draws the real path of a real request as it happens.",
    built: [
      "A small SDK for Node services",
      "Live traces, replays and a services map",
      "An MCP server so AI agents can ask about recent requests",
    ],
    hard: ["Data shapes shown, values never stored", "Speeds and failures per service"],
    facts: [{ value: "Live", label: "request tracing" }],
    stack: ["TypeScript", "Next.js", "PostgreSQL", "WebSockets"],
    links: [{ label: "Source", href: "https://github.com/Its-Delimas/heimdall", kind: "github" }],
    shots: [
      { src: "/projects/heimdall/flow.jpg", alt: "Heimdall drawing a request across services", w: 1568, h: 706 },
      { src: "/projects/heimdall/overview.jpg", alt: "Heimdall overview", w: 1568, h: 706 },
      { src: "/projects/heimdall/services.jpg", alt: "Heimdall services map", w: 1568, h: 706 },
      { src: "/projects/heimdall/schema.jpg", alt: "Heimdall inferred schema", w: 1568, h: 706 },
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
