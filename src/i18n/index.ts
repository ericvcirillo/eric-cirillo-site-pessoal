import type { Content, Locale } from "./types";
import { pt } from "./pt";
import { en } from "./en";

export const content: Record<Locale, Content> = { pt, en };

export function getContent(locale: Locale): Content {
  return content[locale];
}

export type { Content, Locale };
