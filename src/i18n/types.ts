export type Locale = "pt" | "en";

export interface KV {
  v: string;
  l: string;
}

export interface Module {
  n: string;
  t: string;
  d: string;
}

export interface ExperienceItem {
  date: string;
  company: string;
  role: string;
  line: string;
}

export interface Content {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  nav: {
    about: string;
    studio: string;
    experience: string;
    contact: string;
  };
  theme: {
    toLight: string;
    toDark: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    statement: string;
    sub: string;
    cta1: string;
    cta2: string;
  };
  stats: KV[];
  about: {
    label: string;
    photoAlt: string;
    p1: string;
    p2: string;
    p3: string;
    storyCta: string;
  };
  studio: {
    label: string;
    tag: string;
    stack: string;
    title: string;
    kicker: string;
    intro: string;
    modules: Module[];
    metrics: KV[];
    recognition: string;
    caseCta: string;
  };
  experience: {
    label: string;
    items: ExperienceItem[];
    detailCta: string;
  };
  skills: {
    label: string;
    items: string[];
    productsLabel: string;
    products: string;
    productsTail: string;
  };
  contact: {
    label: string;
    line: string;
    email: string;
    whatsappLabel: string;
    whatsapp: string;
    whatsappHref: string;
    linkedin: string;
    linkedinUrl: string;
    location: string;
    downloadsLabel: string;
    dl1: string;
    dl2: string;
  };
  footer: {
    left: string;
    right: string;
  };
}
