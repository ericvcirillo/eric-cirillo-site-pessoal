export interface ExperienceDetailItem {
  id: string;
  company: string;
  period: string;
  role: string;
  intro: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface ExperienceDetailContent {
  meta: { title: string; description: string };
  backLabel: string;
  eyebrow: string;
  title: string;
  items: ExperienceDetailItem[];
  educationLabel: string;
  education: EducationItem[];
}

export const experienceDetailEn: ExperienceDetailContent = {
  meta: {
    title: "Experience, Eric Cirillo",
    description:
      "Eric Cirillo's detailed career trajectory: what he did day to day at each company, what he built and what he learned.",
  },
  backLabel: "Back",
  eyebrow: "Detailed experience",
  title: "What I did at each company",
  items: [
    {
      id: "serasa-experian",
      company: "Serasa Experian",
      period: "Jul/2024 - Present",
      role: "Fraud Analyst III, Professional Services",
      intro:
        "I arrived through the AllowMe acquisition. The transition was smooth because the work continued the same. What changed was the scale: I was promoted quickly to senior and became one of the technical references on the team, with several mid-level and junior analysts around me.",
      bullets: [
        "Technical reference for a client portfolio throughout the entire implementation, from kickoff to production go-live",
        "Running around 20 concurrent projects at different stages",
        "Technical meetings in English with teams in the United States, India and China",
        "Investigating bugs together with product and engineering down to the root cause",
        "Training internal teams and other departments when new products or clients arrive",
        "Supporting the Sales team with technical explanations of the products",
        "Active participation in product team discussions",
        "Created Serasa Studio Identity & Fraud, an internal platform for testing, demonstrations and troubleshooting, recognized by leadership and approved for corporate publication",
      ],
    },
    {
      id: "allowme",
      company: "AllowMe",
      period: "Oct/2022 - Apr/2024",
      role: "Fraud Analyst II, Professional Services",
      intro:
        "My entry into Professional Services. I moved from fraud analysis to implementing Identity & Fraud solutions from scratch, learning everything in practice. AllowMe was acquired by Serasa Experian.",
      bullets: [
        "End-to-end Identity & Fraud solution implementation, from commercial handoff to production go-live",
        "Running technical kickoffs with clients",
        "Supporting REST API and SDK integration side by side with client developers",
        "Troubleshooting and bug investigation",
        "Managing multiple concurrent projects",
        "Adapting communication for different profiles: developer, project manager, C-level",
      ],
    },
    {
      id: "nubank",
      company: "Nubank",
      period: "May/2019 - Jul/2021",
      role: "Customer Excellence Analyst, Fraud Analyst I and II",
      intro:
        "I came in through Customer Experience and moved to the fraud team through an internal selection during a fraud wave that required urgent reinforcement.",
      bullets: [
        "Fraud case investigation: KYC, document analysis, transaction monitoring and compliance",
        "Quality control of team analyses",
        "Analysis of the most complex fraud cases",
        "Supporting validation of a facial recognition product running on Nubank's base",
        "Created Project Apolo: a form and spreadsheet system to organize and answer questions from outsourced triage teams",
      ],
    },
    {
      id: "gf-casa-decor",
      company: "GF Casa Decor",
      period: "Feb/2018 - Mar/2019",
      role: "Sales Assistant",
      intro:
        "First professional experience. Small company, three partners, one of the first employees.",
      bullets: [
        "Customer service",
        "Sales",
        "Administrative routines",
      ],
    },
  ],
  educationLabel: "Education",
  education: [
    {
      degree: "MBA in Business Management",
      institution: "Universidade Cidade de São Paulo",
      period: "2018 - 2020",
    },
    {
      degree: "Business Management, Academic Distinction",
      institution: "Universidade Cidade de São Paulo",
      period: "2016 - 2018",
    },
  ],
};

export const experienceDetail: ExperienceDetailContent = {
  meta: {
    title: "Experiência, Eric Cirillo",
    description:
      "Trajetória detalhada de Eric Cirillo: o que fazia no dia a dia em cada empresa, o que construiu e o que aprendeu.",
  },
  backLabel: "Voltar",
  eyebrow: "Experiência detalhada",
  title: "O que eu fazia em cada empresa",
  items: [
    {
      id: "serasa-experian",
      company: "Serasa Experian",
      period: "Jul/2024 - Presente",
      role: "Fraud Analyst III, Professional Services",
      intro:
        "Cheguei pela aquisição da AllowMe. A transição foi tranquila porque o trabalho continuava o mesmo. O que mudou foi a escala: fui promovido a sênior rápido e passei a ser uma das referências técnicas do time.",
      bullets: [
        "Referência técnica para uma carteira de clientes durante toda a implantação, do kickoff à entrada em produção",
        "Condução de cerca de 20 projetos simultâneos em estágios diferentes",
        "Reuniões técnicas em inglês com times nos Estados Unidos, Índia e China",
        "Investigação de bugs junto a produto e engenharia até a causa raiz",
        "Treinamento de times internos e de outras áreas quando chegam produtos ou clientes novos",
        "Apoio ao time de Vendas com explicações técnicas dos produtos",
        "Participação ativa nas discussões do time de Produto",
        "Criação do Serasa Studio Identity & Fraud, plataforma interna de testes, demonstrações e troubleshooting, reconhecida pela diretoria e aprovada para publicação corporativa",
      ],
    },
    {
      id: "allowme",
      company: "AllowMe",
      period: "Out/2022 - Abr/2024",
      role: "Fraud Analyst II, Professional Services",
      intro:
        "Foi minha entrada no Professional Services. Passei de analista de fraude para implantar soluções de Identity & Fraud do zero, aprendendo tudo na prática. A AllowMe foi adquirida pela Serasa Experian.",
      bullets: [
        "Implantação de soluções de Identity & Fraud de ponta a ponta, do handoff comercial até a entrada em produção",
        "Condução de kickoffs técnicos com clientes",
        "Suporte à integração de APIs REST e SDKs lado a lado com os desenvolvedores dos clientes",
        "Troubleshooting e investigação de bugs",
        "Gestão de múltiplos projetos simultâneos",
        "Adaptação de comunicação para diferentes perfis: desenvolvedor, gerente de projeto, C-level",
      ],
    },
    {
      id: "nubank",
      company: "Nubank",
      period: "Mai/2019 - Jul/2021",
      role: "Customer Excellence Analyst, Fraud Analyst I e II",
      intro:
        "Entrei pelo Customer Experience e migrei para o time de fraude numa seleção interna durante uma onda de fraudes que exigia reforço urgente.",
      bullets: [
        "Investigação de casos de fraude: KYC, análise documental, monitoramento transacional e compliance",
        "Controle de qualidade das análises do time",
        "Análise dos casos de fraude mais complexos",
        "Apoio à validação de produto de reconhecimento facial rodando sobre a base do Nubank",
        "Criação do Projeto Apolo: sistema de formulário e planilha para organizar e responder dúvidas dos times terceiros de triagem",
      ],
    },
    {
      id: "gf-casa-decor",
      company: "GF Casa Decor",
      period: "Fev/2018 - Mar/2019",
      role: "Assistente Comercial",
      intro:
        "Primeira experiência profissional. Empresa pequena, três sócios, um dos primeiros funcionários.",
      bullets: [
        "Atendimento ao cliente final",
        "Vendas",
        "Rotina administrativa",
      ],
    },
  ],
  educationLabel: "Formação",
  education: [
    {
      degree: "MBA em Gestão Empresarial",
      institution: "Universidade Cidade de São Paulo",
      period: "2018 - 2020",
    },
    {
      degree: "Gestão Comercial, Láurea Acadêmica",
      institution: "Universidade Cidade de São Paulo",
      period: "2016 - 2018",
    },
  ],
};
