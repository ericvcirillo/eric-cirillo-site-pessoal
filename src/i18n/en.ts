import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Eric Cirillo, Implementation Specialist in Identity & Fraud",
    description:
      "Professional Services and Identity & Fraud implementation specialist. Over six years connecting product, customer and engineering, applying AI to build real internal tools.",
    ogAlt: "Eric Cirillo, Implementation Specialist in Identity & Fraud",
  },
  nav: {
    about: "About",
    studio: "Featured project",
    experience: "Experience",
    contact: "Contact",
  },
  theme: {
    toLight: "Light",
    toDark: "Dark",
  },
  hero: {
    eyebrow: "Implementation Specialist, Identity & Fraud",
    name: "Eric Cirillo",
    statement: "Technology is not the goal. It is the tool.",
    sub: "This site is a portal to my career: full trajectory, the projects I built, and a resume available for download.",
    cta1: "See Serasa Studio",
    cta2: "Download resume",
  },
  stats: [
    { v: "6+", l: "years of experience" },
    { v: "100+", l: "clients supported" },
    { v: "50+", l: "implementations" },
    { v: "11+", l: "products mastered" },
    { v: "20+", l: "concurrent projects" },
  ],
  about: {
    label: "About",
    photoAlt: "Eric Cirillo",
    p1: "I have worked on Identity & Fraud implementation for more than six years. I started in Nubank fraud operations, moved into Professional Services at AllowMe, and today I am the technical reference at Serasa Experian for the most complex projects.",
    p2: "In practice, I join the project after the contract is signed. I learn the client scenario, run the technical kickoff, support developers through REST API and SDK integration, and follow everything to production. I run those meetings in English often, including with teams in the United States, India, and China.",
    p3: "In recent years I started using generative AI to build my own tools. To me, technology was never the goal. It is what I use to solve the problem in front of me.",
    storyCta: "Read the full story",
  },
  studio: {
    label: "Featured project",
    tag: "Internal tool",
    stack: "React / Node.js / REST APIs / SDKs / Claude Code",
    title: "Serasa Studio",
    kicker: "A demonstration of what I can build with AI.",
    intro:
      "Product knowledge lived scattered. Each specialist used their own tool and demos depended on whoever knew Postman. I built one single environment, with real calls to 11 Identity & Fraud products, to fix that.",
    modules: [
      {
        n: "01",
        t: "Demo mode",
        d: "Runs full journeys with no credentials, ready for any meeting.",
      },
      {
        n: "02",
        t: "Onboarding Builder",
        d: "Assembles the client journey end to end and generates the PDF report.",
      },
      {
        n: "03",
        t: "Flow Builder",
        d: "Draws anti fraud flow diagrams inside the platform itself.",
      },
      {
        n: "04",
        t: "Data driven engine",
        d: "Each product describes its own authentication and call sequence. A new product costs very little code.",
      },
    ],
    metrics: [
      { v: "24k", l: "lines of code" },
      { v: "45", l: "React components" },
      { v: "4", l: "applications" },
      { v: "3 wks", l: "of work, solo" },
    ],
    recognition:
      "Recognized by leadership at the internal AI committee and approved for corporate publication.",
  },
  experience: {
    label: "Experience",
    items: [
      {
        date: "JUL 2024 / NOW",
        company: "Serasa Experian",
        role: "Fraud Analyst III, Professional Services",
        line: "Technical reference for a client portfolio, from technical kickoff to production go live. I run about 20 projects at once and the English meetings with teams in the United States, India, and China.",
      },
      {
        date: "OCT 2022 / APR 2024",
        company: "AllowMe",
        role: "Fraud Analyst II, Professional Services",
        line: "I learned to implement Identity & Fraud end to end with enterprise clients. I found an undocumented bug in FaceMatch right after launch, reproduced it, and took it to the product team, who confirmed the failure. (AllowMe was acquired by Serasa Experian.)",
      },
      {
        date: "MAY 2019 / JUL 2021",
        company: "Nubank",
        role: "Fraud Analyst II, I and Customer Excellence",
        line: "Financial fraud operations at scale, with KYC, document fraud, and transaction monitoring. This is where I understood how fraud operations really work from the inside.",
      },
      {
        date: "FEB 2018 / MAR 2019",
        company: "GF Casa Decor",
        role: "Sales and customer service",
        line: "First professional experience, in sales and client relationships, before the turn toward technology and fraud.",
      },
    ],
  },
  skills: {
    label: "Skills",
    items: [
      "End to end solution implementation",
      "REST API and SDK integration",
      "Troubleshooting and bug investigation",
      "Onboarding flow definition",
      "Stakeholder management",
      "International communication in English",
      "Technical documentation and training",
      "SQL, Python, React and Node.js",
      "Generative AI and coding agents",
    ],
    productsLabel: "Products I work with",
    products:
      "KYC, Facial Biometrics, Liveness, FaceMatch, Device Intelligence, Document Forensics, OCR, Background Check, Fraud Score, LVS,",
    productsTail: "among others.",
  },
  contact: {
    label: "Contact",
    line: "",
    email: "ericvcirillo@gmail.com",
    whatsappLabel: "WhatsApp",
    whatsapp: "(11) 95297-4255",
    whatsappHref: "https://wa.me/5511952974255",
    linkedin: "linkedin.com/in/ericirillo",
    linkedinUrl: "https://www.linkedin.com/in/ericirillo/",
    location: "São Paulo, fluent English",
    downloadsLabel: "Downloads",
    dl1: "Resume",
    dl2: "Career Bible",
  },
  footer: {
    left: "Eric Cirillo, São Paulo",
    right: "A document, not a showcase. 2026",
  },
};
