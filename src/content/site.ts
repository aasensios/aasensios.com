import type { YearMonth } from "../lib/dates";

export type Experience = {
  role: string;
  company: string;
  client?: string;
  start: YearMonth;
  /** `null` means present. */
  end: YearMonth | null;
  icon: string;
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
  avatar: "/avatar.jpg",
  /** Start of the first job; drives the "N years shipping" sticker. */
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
    tool("Nx", "nx"),
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
      description: "JSP blog with MVC and data access",
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
      headline: ["Fewer steps.", "Happier", "users."],
      sticker: "years shipping",
      lead: "I'm a frontend-focused product engineer who can't stand an extra click. I ship interfaces where the next step is always obvious, and I'll happily argue with a design until it's simpler. Right now I'm rebuilding TrustYou's customer experience platform from the ground up.",
      primaryCta: "See my work",
      secondaryCta: "Say hi on LinkedIn",
      stats: [
        { value: "23%", label: "faster interactions at TrustYou" },
        { value: "78%", label: "faster builds at Inditex" },
        { value: "4", label: "industries, 1 obsession: intuitive interfaces" },
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
      intro:
        "7 years building React and TypeScript products across research, automotive, retail and hospitality. I own features end to end, keep codebases healthy, and design flows where every screen has a clear next action. Currently rebuilding the customer experience platform at TrustYou.",
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
