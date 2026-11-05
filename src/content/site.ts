import type { YearMonth } from "../lib/dates";

export type Experience = {
  role: string;
  company: string;
  client?: string;
  start: YearMonth;
  /** `null` means present. */
  end: YearMonth | null;
  icon: string;
  /** Zoom for icons with built-in padding, so all company icons look the same size. */
  iconScale?: number;
  color: string;
  colorDark?: string;
};

export type Tool = { name: string; logo: string; invertOnDark?: boolean };

export type Project = {
  title: string;
  repo: string;
  description: string;
  language: string;
  year: number;
  illustration: "forms" | "gmail" | "blog" | "dna";
};

export type Link = { label: "GitHub" | "LinkedIn"; href: string; logo: string };

/** "Product Engineer at TrustYou" or "Frontend Engineer at Cognizant (Inditex)". */
export function experienceLabel(e: Experience): string {
  return `${e.role} at ${e.company}${e.client ? ` (${e.client})` : ""}`;
}

const tool = (name: string, slug: string, invertOnDark = false): Tool => ({
  name,
  logo: `/logos/${slug}.svg`,
  ...(invertOnDark && { invertOnDark }),
});

export const site = {
  name: "Alejandro Asensio",
  role: "Frontend-focused product engineer",
  location: "Barcelona area, full remote",
  avatar: "/avatar.jpg",
  /** Start of the first job; drives the years shown in the stat cells. */
  firstJobStart: { year: 2019, month: 6 } as YearMonth,

  experience: [
    {
      role: "Product Engineer",
      company: "TrustYou",
      start: { year: 2022, month: 8 },
      end: null,
      icon: "/logos/trustyou.svg",
      color: "#7b61ff",
    },
    {
      role: "Frontend Engineer",
      company: "Cognizant",
      client: "Inditex",
      start: { year: 2021, month: 12 },
      end: { year: 2022, month: 8 },
      icon: "/logos/cognizant.png",
      color: "#26619c",
      colorDark: "#4f93d6",
    },
    {
      role: "Fullstack Engineer",
      company: "Capitole",
      client: "Ficosa",
      start: { year: 2021, month: 6 },
      end: { year: 2021, month: 11 },
      icon: "/logos/capitole.png",
      iconScale: 1.45,
      color: "#1c3aa0",
      colorDark: "#5b7cf0",
    },
    {
      role: "Fullstack Engineer",
      company: "BSC",
      start: { year: 2019, month: 6 },
      end: { year: 2021, month: 6 },
      icon: "/logos/bsc.png",
      color: "#002068",
      colorDark: "#4f6fd0",
    },
  ] satisfies Experience[],

  stack: [
    tool("Claude", "claude"),
    tool("TypeScript", "typescript"),
    tool("React", "react"),
    tool("TanStack", "tanstack"),
    tool("shadcn/ui", "shadcnui", true),
    tool("Astro", "astro", true),
    tool("Vite+", "vite"),
    tool("pnpm", "pnpm"),
    tool("Playwright", "playwright"),
    tool("Storybook", "storybook"),
    tool("Docker", "docker"),
    tool("FastAPI", "fastapi"),
    tool("PostgreSQL", "postgresql"),
    tool("MongoDB", "mongodb"),
    tool("ClickHouse", "clickhouse"),
  ] satisfies Tool[],

  projects: [
    {
      title: "Google Forms clone",
      repo: "https://github.com/aasensios/google-forms-clone",
      description: "Form builder replica",
      language: "TypeScript",
      year: 2026,
      illustration: "forms",
    },
    {
      title: "Gmail clone",
      repo: "https://github.com/aasensios/gmail-clone",
      description: "Email client replica",
      language: "TypeScript",
      year: 2021,
      illustration: "gmail",
    },
    {
      title: "Medical blog",
      repo: "https://github.com/aasensios/medical-blog",
      description: "Blog with MVC and data access",
      language: "Java",
      year: 2019,
      illustration: "blog",
    },
    {
      title: "Ocikitos",
      repo: "https://github.com/aasensios/ocikitos",
      description: "DNA-based dog identification",
      language: "PHP",
      year: 2019,
      illustration: "dna",
    },
  ] satisfies Project[],

  links: [
    { label: "GitHub", href: "https://github.com/aasensios", logo: "/logos/github.svg" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aasensios/",
      logo: "/logos/linkedin.svg",
    },
  ] satisfies Link[],

  copy: {
    marketing: {
      facts: (years: number) =>
        `I've been shipping software for more than ${years} years now. Based in Barcelona area, working full remote.`,
      keysLabel: "Get in touch",
      headline: "I make screens you can leave.",
      intro: [
        "Building digital products taught me one thing: the best interface gets you what you need, then lets you go.",
        "So I cut steps, make the next action obvious and keep things fast. The fewer minutes you spend with my screens, the better I've done my job.",
      ],
      secondaryCta: "Say hi on LinkedIn",
      githubCta: "See my work on GitHub",
      moodsLead: "Same portfolio, three moods:",
      /** The page-turn corner at the bottom of the page: what it says, and its accessible name. */
      peelTip: (style: string) => `Turn the page: ${style}`,
      peelLabel: "Turn the page to see this portfolio as a SaaS",
      /** What the speaker grille says over its preview: where it goes, or that you are here. */
      glassLabels: {
        saas: "See as a SaaS",
        minimalist: "Go minimalist",
        current: "You're already here",
      } as Record<string, string>,
      /** A second, shorter achievement per job, shown under its result. Keyed by company. */
      achievements: {
        TrustYou: "Led the internationalization strategy",
        Cognizant: "Wrote BDD end-to-end tests with Cypress and Cucumber",
        Capitole: "Built backend microservices with Flask and FastAPI",
        BSC: "Shipped a COVID-19 resources site against a tight deadline",
      } as Record<string, string>,
      /** Each company's site and a screenshot of it, for the hover card on its name. */
      companies: {
        TrustYou: {
          name: "TrustYou",
          url: "https://www.trustyou.com",
          preview: "/previews/trustyou.webp",
        },
        Cognizant: {
          name: "Cognizant",
          url: "https://www.cognizant.com",
          preview: "/previews/cognizant.webp",
        },
        Capitole: {
          name: "Capitole Consulting",
          url: "https://www.capitole-consulting.com",
          preview: "/previews/capitole.webp",
        },
        BSC: {
          name: "Barcelona Supercomputing Center",
          url: "https://www.bsc.es",
          preview: "/previews/bsc.webp",
        },
      } as Record<string, { name: string; url: string; preview: string }>,
      /** Measured result per job, shown on that job's experience row. Keyed by company. */
      outcomes: {
        TrustYou: { value: "23%", label: "faster interactions" },
        Cognizant: { value: "78%", label: "faster builds" },
        Capitole: { value: "React", label: "features for an app testing vehicle electronics" },
        BSC: {
          value: "2",
          label: "clinical research apps built from scratch: Indexer and ICTUSnet",
        },
      } as Record<string, { value: string; label: string }>,
      /** The stack grouped by job; every `site.stack` name appears exactly once. */
      stackGroups: [
        {
          label: "Frontend",
          tools: ["TypeScript", "React", "TanStack", "shadcn/ui", "Astro"],
        },
        {
          label: "Tooling and testing",
          tools: ["Claude", "Vite+", "pnpm", "Playwright", "Storybook"],
        },
        {
          label: "Backend and data",
          tools: ["FastAPI", "PostgreSQL", "MongoDB", "ClickHouse", "Docker"],
        },
      ],
      sections: {
        stack: "Tools I reach for",
        experience: "Where I've worked",
        projects: "Side projects",
      },
    },
    saas: {
      headline: "Frontend-focused product engineer",
      subline: "Product Engineer at TrustYou · Barcelona, remote",
      intro: (years: number) =>
        `${years} years building React and TypeScript products across research, automotive, retail and hospitality. I own features end to end, keep codebases healthy, and design flows where every screen has a clear next action. Currently rebuilding the customer experience platform at TrustYou.`,
      sections: {
        experience: "Experience",
        stack: "Stack",
        projects: "Side projects",
        links: "Links",
      },
    },
    minimalist: {
      headline: "I build web products that are clear, calm, and quick to use.",
      paragraphs: [
        "I'm a frontend-focused product engineer. I care about the product and the code behind it in equal measure, and I like finding the simpler version of things.",
        "These days I'm rebuilding the customer experience platform at TrustYou.",
      ],
      sections: {
        experience: "Experience",
        stack: "Stack",
        projects: "Side projects",
        links: "Links",
      },
    },
  },
};
