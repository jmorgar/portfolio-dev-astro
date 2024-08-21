import AngularIcon from "../components/icons/Angular.astro";
import AstroIcon from "../components/icons/AstroIcon.astro";
import CssIcon from "../components/icons/Css.astro";
import CypressIcon from "../components/icons/Cypress.astro";
import HtmlIcon from "../components/icons/Html.astro";
import JavaIcon from "../components/icons/Java.astro";
import JavaScriptIcon from "../components/icons/JavaScript.astro";
import LitIcon from "../components/icons/Lit.astro";
import PlaywrightIcon from "../components/icons/Playwright.astro";
import StorybookIcon from "../components/icons/Storybook.astro";
import TailwindIcon from "../components/icons/Tailwind.astro";
import type { Tag } from "../types/Tag";

export const TAGS: {
  HTML: Tag;
  Css: Tag;
  Astro: Tag;
  Angular: Tag;
  Lit: Tag;
  JavaScript: Tag;
  Java: Tag;
  Cypress: Tag;
  StoryBook: Tag;
  Playwright: Tag;
  Tailwind: Tag;
} = {
  HTML: {
    name: "HTML",
    class: "bg-[#a52800] text-white",
    icon: HtmlIcon,
  },
  Css: {
    name: "CSS",
    class: "bg-[#028393] text-white",
    icon: CssIcon,
  },
  Astro: {
    name: "Astro",
    class: "bg-[#6b0d0d] text-white",
    icon: AstroIcon,
  },
  Angular: {
    name: "Angular",
    class: "bg-[#4f005d] text-white",
    icon: AngularIcon,
  },
  Lit: {
    name: "Lit",
    class: "bg-[#007dc1] text-white",
    icon: LitIcon,
  },
  JavaScript: {
    name: "JavaScript",
    class: "bg-[#9f8f00] text-white",
    icon: JavaScriptIcon,
  },
  Java: {
    name: "Java",
    class: "bg-[#ff9800] text-white",
    icon: JavaIcon,
  },
  Cypress: {
    name: "Cypress",
    class: "bg-[#008d06] text-white",
    icon: CypressIcon,
  },
  StoryBook: {
    name: "StoryBook",
    class: "bg-[#f986ad] text-white",
    icon: StorybookIcon,
  },
  Playwright: {
    name: "Playwright",
    class: "bg-[#005104] text-white",
    icon: PlaywrightIcon,
  },
  Tailwind: {
    name: "Tailwind",
    class: "bg-[#06b6d4] text-white",
    icon: TailwindIcon,
  },
};
