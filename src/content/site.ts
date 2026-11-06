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

export type DayGif = { light: string; dark: string };

/** Indexed like `Date#getDay()`, Sunday first. */
export type Week = [DayGif, DayGif, DayGif, DayGif, DayGif, DayGif, DayGif];

export type ContactLink = Link & { tag: string; meme: string; gifs: Week };

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
      tag: "Hi",
      meme: "waving hello",
      gifs: [
        { light: "oQzmXr9FploiZmZshV", dark: "O4NH6GvxpdJzelsLHm" },
        { light: "gLosUkC8d1UPEDGwWc", dark: "WdLOfUO196IOeWzKCj" },
        { light: "pcwaLYOQb3xN6", dark: "N8kAcqsVEC6eeXcKV2" },
        { light: "11LKx7277LkE0M", dark: "RySVSQ94mB3qr9IU2s" },
        { light: "zpsdW9e6rBQfPwTOxQ", dark: "d2jibZKKA0k3RUgU" },
        { light: "0vcCfc5y3MXCHzpzRw", dark: "fAPiZyw1Jxu4nalFJm" },
        { light: "TFLlbP63EEn0JuimeE", dark: "KjQRCuPM8jfwZw7Tnk" },
      ],
    },
    {
      label: "See my work on GitHub",
      href: "https://github.com/aasensios",
      tag: "Work",
      meme: "at a computer",
      gifs: [
        { light: "SX71qs3TDxVkvbLJ4o", dark: "VbnUQpnihPSIgIXuZv" },
        { light: "kudIERso2pFiE", dark: "3oKIPnAiaMCws8nOsE" },
        { light: "3o7TKU1Lzv3AURPVN6", dark: "aNqEFrYVnsS52" },
        { light: "uCl0snPnLDRV2FYMXB", dark: "10RhccNxPSaglW" },
        { light: "ChpOyeacGmpQk", dark: "JuFwy0zPzd6jC" },
        { light: "fbyGEE9mlqDyE", dark: "JIX9t2j0ZTN9S" },
        { light: "XMehCKG4rsrGh9BTAT", dark: "2RiU1RUjyh4C4" },
      ],
    },
  ] satisfies ContactLink[],

  copy: {
    headline: { text: "I make screens you can leave", emphasis: "calmly" },
    intro: [
      "Building digital products taught me one thing: the best interfaces get you what you need, then let you go.",
      "Software is a tool, not the final goal itself. So I tend to cut steps, make the next action obvious, and keep things fast. The fewer minutes you spend with my screens, the better I've done my job.",
    ],
    facts: (years: number) =>
      `I've been shipping software for more than ${years} years now. Based in Barcelona, working fully remote.`,
    theme: { label: "Dark mode", toDark: "See the sunset", toLight: "See the dawn" },
    avatar: { open: "View photo of Alejandro Asensio", close: "Close photo" },
    pack: {
      open: "Meet the whole furry family",
      title: "The whole furry family",
      lede: "Dogs for daylight, cats for the mighty night. Gifs in CTAs change after switching the dark/light mode.",
      close: "Close",
      today: "Today",
      themes: { light: "Day", dark: "Night" },
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      review: {
        hint: "Dev only: click GIFs to mark them for replacement.",
        marked: "marked",
        copy: "Copy request",
        copied: "Copied",
        clear: "Clear",
        request: "Replace these GIFs:",
      },
    },
    chart: {
      replay: "Replay chart animation",
      replayTip: "Replay",
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
    },
  },
};
