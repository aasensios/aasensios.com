import type { YearMonth } from "../lib/dates";

export type Experience = {
  role: string;
  company: string;
  url: string;
  client?: { name: string; url: string };
  logo: string;
  color: string;
  colorDark?: string;
  start: YearMonth;
  /** `null` means present. */
  end: YearMonth | null;
};

export type Project = {
  title: string;
  repo: string;
  year: number;
};

export type Link = { label: string; href: string };

/** Giphy ids for one day's meme on a contact button: a dog in light mode, a cat in dark mode. */
export type DayGif = { light: string; dark: string };

/**
 * Seven days of memes, indexed like `Date#getDay()`: Sunday first. The visitor's local
 * day picks one, and the page switches to the next at their local midnight.
 */
export type Week = [DayGif, DayGif, DayGif, DayGif, DayGif, DayGif, DayGif];

/** `meme` describes what the animals do, for the gallery's alt text. */
export type ContactLink = Link & { meme: string; gifs: Week };

export const site = {
  name: "Alejandro Asensio",
  role: "Frontend-focused product engineer",
  firstJobStart: { year: 2019, month: 6 } as YearMonth,

  experience: [
    {
      role: "Product Engineer",
      company: "TrustYou",
      url: "https://www.trustyou.com",
      logo: "trustyou.svg",
      color: "#7b61ff",
      start: { year: 2022, month: 8 },
      end: null,
    },
    {
      role: "Frontend Engineer",
      company: "Cognizant",
      url: "https://www.cognizant.com",
      logo: "cognizant.svg",
      color: "#26619c",
      colorDark: "#4f93d6",
      client: { name: "Inditex", url: "https://www.inditex.com" },
      start: { year: 2021, month: 12 },
      end: { year: 2022, month: 8 },
    },
    {
      role: "Fullstack Engineer",
      company: "Capitole",
      url: "https://www.capitole-consulting.com",
      logo: "capitole.svg",
      color: "#1c3aa0",
      colorDark: "#5b7cf0",
      client: { name: "Ficosa", url: "https://www.ficosa.com" },
      start: { year: 2021, month: 6 },
      end: { year: 2021, month: 11 },
    },
    {
      role: "Fullstack Engineer",
      company: "Barcelona Supercomputing Center",
      url: "https://www.bsc.es",
      logo: "bsc.svg",
      color: "#002068",
      colorDark: "#4f6fd0",
      start: { year: 2019, month: 6 },
      end: { year: 2021, month: 6 },
    },
  ] satisfies Experience[],

  projects: [
    {
      title: "Google Forms clone",
      repo: "https://github.com/aasensios/google-forms-clone",
      year: 2026,
    },
    {
      title: "Gmail clone",
      repo: "https://github.com/aasensios/gmail-clone",
      year: 2021,
    },
    {
      title: "Medical blog",
      repo: "https://github.com/aasensios/medical-blog",
      year: 2019,
    },
    {
      title: "Ocikitos",
      repo: "https://github.com/aasensios/ocikitos",
      year: 2019,
    },
  ] satisfies Project[],

  links: [
    {
      label: "Say hi on LinkedIn",
      href: "https://www.linkedin.com/in/aasensios/",
      meme: "waving hello",
      gifs: [
        { light: "lv8qrl7TTuFj6QN3bM", dark: "ToMjGpRZ4gF6YuAT4li" },
        { light: "lsPxvZZHb7h1Y01oeA", dark: "125E8v90blHqtr4HrB" },
        { light: "Xev2JdopBxGj1LuGvt", dark: "usZjWKAwsRkfbekTAv" },
        { light: "KGkndti4sm8XNrai1t", dark: "kTU7lCo3d4OAPJ0zau" },
        { light: "zpsdW9e6rBQfPwTOxQ", dark: "j93ycvEyWlSIIg8AEl" },
        { light: "0vcCfc5y3MXCHzpzRw", dark: "3UkqVq3F50bVCi9URl" },
        { light: "hrWcZNce6izCScj9xn", dark: "1in10D39NhoNq" },
      ],
    },
    {
      label: "See my work on GitHub",
      href: "https://github.com/aasensios",
      meme: "at a computer",
      gifs: [
        { light: "SX71qs3TDxVkvbLJ4o", dark: "VbnUQpnihPSIgIXuZv" },
        { light: "kudIERso2pFiE", dark: "3oKIPnAiaMCws8nOsE" },
        { light: "3o7TKU1Lzv3AURPVN6", dark: "aNqEFrYVnsS52" },
        { light: "uCl0snPnLDRV2FYMXB", dark: "10RhccNxPSaglW" },
        { light: "ChpOyeacGmpQk", dark: "13HBDT4QSTpveU" },
        { light: "SwImQhtiNA7io", dark: "JIX9t2j0ZTN9S" },
        { light: "XMehCKG4rsrGh9BTAT", dark: "4a5b4AH9TG7zEgsEEe" },
      ],
    },
  ] satisfies ContactLink[],

  copy: {
    /** `emphasis` is set in italics after `text`, before the full stop. */
    headline: { text: "I make screens you can leave", emphasis: "calmly" },
    intro: [
      "Building digital products taught me one thing: the best interfaces get you what you need, then let you go.",
      "Software is a tool, not the final goal itself. So I tend to cut steps, make the next action obvious, and keep things fast. The fewer minutes you spend with my screens, the better I've done my job.",
    ],
    facts: (years: number) =>
      `I've been shipping software for more than ${years} years now. Based in Barcelona, working fully remote.`,
    theme: { label: "Dark mode", toDark: "Switch to dark mode", toLight: "Switch to light mode" },
    avatar: { open: "View photo of Alejandro Asensio", close: "Close photo" },
    pack: {
      open: "Meet the whole pack",
      title: "The whole pack",
      lede: "A dog and a cat for each button, every day of the week. They change at your midnight.",
      close: "Close",
      today: "Today",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    },
    chart: {
      replay: "Replay chart animation",
      replayTip: "Replay",
      speed: (rate: string) => `Animation speed, ${rate}`,
      speedTip: (rate: string) => `Speed ${rate}`,
    },
    footer: [
      { label: "Made with", link: { label: "Astro", href: "https://astro.build/" } },
      {
        label: ", deployed to",
        link: { label: "GitHub Pages", href: "https://docs.github.com/en/pages" },
      },
      {
        label: ", and hosted on",
        link: { label: "WordPress Domains", href: "https://wordpress.com/domains/" },
      },
    ],
    sections: {
      experience: "Relevant experience",
      projects: "Some projects",
      links: "Contact me",
    },
  },
};
