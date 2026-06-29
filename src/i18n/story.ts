import type { Locale } from "./types";

export interface Beat {
  label: string;
  paras: string[];
  /** marca um trecho que ainda vamos preencher juntos na entrevista */
  todo?: boolean;
}

export interface StoryCompany {
  id: string;
  name: string;
  role: string;
  period: string;
  beats: Beat[];
}

export interface StoryChapter {
  id: string;
  number: string;
  label: string;
  title: string;
  lead?: string;
  /** parágrafos soltos, para capítulos ainda em rascunho */
  paras?: string[];
  /** beats diretos de capítulo, para capítulos sem companies */
  beats?: Beat[];
  companies?: StoryCompany[];
  todo?: boolean;
}

export interface StoryContent {
  meta: { title: string; description: string };
  backLabel: string;
  eyebrow: string;
  title: string;
  lead: string;
  tocLabel: string;
  chapters: StoryChapter[];
  closing: { title: string; paras: string[]; ctaLabel: string };
}

const pt: StoryContent = {
  meta: {
    title: "Eric Cirillo, a história completa",
    description:
      "A trajetória completa de Eric Cirillo, da operação comercial à referência técnica em Identity & Fraud. Como cheguei a cada empresa, o que fiz e o que aprendi.",
  },
  backLabel: "Voltar",
  eyebrow: "História completa",
  title: "Como cheguei até aqui",
  lead: "Esta é a versão longa, um livro aberto sobre a minha carreira. Não é o currículo resumido. Aqui conto como cheguei a cada empresa, o que eu fazia de verdade no dia a dia, o que construí, o que aprendi e por que segui em frente.",
  tocLabel: "Capítulos",
  chapters: [
    {
      id: "trajetoria",
      number: "01",
      label: "Trajetória",
      title: "Empresa por empresa",
      lead: "A trajetória em ordem, com o contexto que o currículo não cabe.",
      companies: [
        {
          id: "gf-casa-decor",
          name: "GF Casa Decor",
          role: "Assistente Comercial",
          period: "Fev/2018 - Mar/2019",
          beats: [
            {
              label: "Como cheguei",
              paras: [
                "No ensino médio eu não me interessava muito pelos estudos, e por um tempo confundi isso com não gostar de estudar. Descobri que era o contrário na faculdade de Gestão Comercial: quando o assunto me interessava, eu aprendia rápido e me envolvia de verdade. Gostei da parte estratégica do curso, de logística a entendimento de cliente, e fui bem em provas, trabalhos e apresentações.",
                "Foi ali que apareceu a oportunidade. Um colega de sala era dono da GF Casa Decor e me chamou para o time.",
              ],
            },
            {
              label: "O que eu fazia",
              paras: [
                "A GF era uma empresa muito pequena na época, três sócios, e eu fui um dos primeiros funcionários a chegar. Por ser pequena, eu fazia de tudo: atendimento ao cliente final, vendas e rotina administrativa.",
              ],
            },
            {
              label: "O que construí e aprendi",
              paras: [
                "Foi onde aprendi, na prática, como uma empresa funciona por dentro e o peso de ter responsabilidade. Saí com uma base de relacionamento e comunicação com o cliente que, anos depois, se mostrou tão importante quanto a parte técnica nas implantações.",
              ],
            },
            {
              label: "Como saí",
              paras: [
                "Fiquei cerca de um ano e pouco. Saí quando passei no processo seletivo do Nubank. Eu era fã da empresa e queria entrar de qualquer forma, para qualquer vaga.",
              ],
            },
          ],
        },
        {
          id: "nubank",
          name: "Nubank",
          role: "Customer Excellence Analyst, Fraud Analyst I e II",
          period: "Mai/2019 - Jul/2021",
          beats: [
            {
              label: "Como cheguei",
              paras: [
                "Entrei pela porta que muita gente usou para construir carreira lá: Customer Experience. Fui bem nessa área e, num momento em que o time de fraude enfrentava uma onda grande de fraudes e precisava de gente com urgência, abriram uma seleção interna. Escolheram quem tinha as melhores notas no ciclo de performance para um teste de um mês na área antifraude.",
                "Pela urgência, não foi uma seleção comum, foi aprender fazendo, um dia em cada frente. Para mim era praticamente uma promoção. Fui, gostei muito do trabalho e fiquei.",
              ],
            },
            {
              label: "O que eu fazia",
              paras: [
                "Comecei investigando casos de fraude no dia a dia: KYC, análise documental, monitoramento transacional e compliance, em escala. Tinha boa performance na resolução dos casos, e foi ali que tive meu primeiro contato sério com SQL e com análise de indicadores.",
              ],
            },
            {
              label: "O que construí e aprendi",
              paras: [
                "Meu primeiro projeto de verdade nasceu nesse período, o Apolo. Os times terceiros que faziam a triagem precisavam tirar dúvidas com a gente e não existia um canal próprio para isso. Inspirado numa iniciativa de outra área, montei do zero um sistema simples: um formulário que alimentava uma planilha bem estruturada, por onde a gente recebia e organizava as dúvidas. Foi resolvendo esse problema que descobri que gostava de trabalhar com dados e de construir ferramentas para destravar processos.",
                "Fui promovido a analista II, passei a fazer o controle de qualidade das análises do time e a tocar os casos de fraude mais complexos. Também apoiei a implantação de um produto de reconhecimento facial, um modelo de IA rodando sobre a base do Nubank, validando se funcionava e se reconhecia as pessoas certas.",
              ],
            },
            {
              label: "Como saí",
              paras: [
                "Houve um corte na minha área e eu acabei saindo. Foi difícil, porque eu gostava muito do Nubank.",
              ],
            },
          ],
        },
        {
          id: "allowme",
          name: "AllowMe",
          role: "Fraud Analyst II, Professional Services",
          period: "Out/2022 - Abr/2024",
          beats: [
            {
              label: "Como cheguei",
              paras: [
                "Entre o Nubank e a AllowMe houve um intervalo de cerca de quinze meses, e ele foi proposital. As vagas de analista antifraude que apareciam eram, naquele momento, um passo atrás para mim, em remuneração e no tipo de trabalho, então preferi esperar a vaga certa.",
                "Usei o tempo para me preparar. Fiz cursos de SQL e de Python e construí, por conta própria, um projeto de análise de dados sobre o Corinthians, o time para o qual torço. Levei esse projeto para a entrevista da AllowMe, e ele ajudou a mostrar que eu já vinha com uma base técnica mais apurada. Foi assim que entrei.",
              ],
            },
            {
              label: "O que eu fazia",
              paras: [
                "Foi a minha entrada no Professional Services. Passei a implantar soluções de Identity & Fraud de ponta a ponta, lado a lado com os desenvolvedores dos clientes nas integrações de APIs REST e SDKs, conduzindo kickoffs técnicos e troubleshooting, do handoff comercial até a entrada em produção.",
              ],
            },
            {
              label: "O que construí e aprendi",
              paras: [
                "Foi uma transição sofrida, no bom sentido. Eu vinha da análise de fraude e, de uma vez, precisei aprender muita coisa nova: ler documentação de implementação, usar o Postman, entender de verdade o que é uma API e um SDK, e me integrar com times de produto e de engenharia com quem eu não trabalhava antes.",
                "Foi também meu primeiro contato com cliente B2B, depois de uma carreira inteira em B2C. Tive que aprender a conduzir reuniões e a falar com perfis bem diferentes, do desenvolvedor de uma empresa pequena ao gerente de projeto de uma grande, ajustando o tom para cada um. O trabalho deixou de ser sequencial e operacional e passou a ser estratégico: eu pensava no fluxo inteiro do cliente, o que exigiu muito mais organização e disciplina para não perder nenhuma ponta entre vários projetos ao mesmo tempo.",
                "Tive a sorte de encontrar gente muito boa e muito paciente, que me ajudou a fazer essa virada.",
              ],
            },
            {
              label: "Como saí",
              paras: [
                "A AllowMe foi adquirida pela Serasa Experian, e eu fui junto. Como o meu trabalho seguia o mesmo, a saída não teve drama, foi mais uma continuação do que uma ruptura.",
              ],
            },
          ],
        },
        {
          id: "serasa-experian",
          name: "Serasa Experian",
          role: "Fraud Analyst III, Professional Services",
          period: "Jul/2024 - Presente",
          beats: [
            {
              label: "Como cheguei",
              paras: [
                "Cheguei à Serasa pela aquisição da AllowMe, e dessa vez a transição foi tranquila, porque o trabalho continuava o mesmo. O que mudou foi a escala. Fui para um time bem maior e fui promovido rápido a sênior, uma promoção que já vinha sendo encaminhada na AllowMe. Lá eu era o menos sênior do grupo. Na Serasa passei a ser o sênior de referência, com vários plenos e juniors por perto.",
              ],
            },
            {
              label: "O que eu faço",
              paras: [
                "Sou referência técnica de uma carteira de clientes durante toda a implantação, do kickoff técnico à entrada em produção. Conduzo cerca de 20 projetos simultâneos e reuniões técnicas em inglês com times nos Estados Unidos, Índia e China, e investigo bugs junto a produto e engenharia até a causa raiz.",
                "Boa parte do meu tempo também é destravar gente, algo que eu já fazia lá no Nubank quando ia treinar os times de triagem. Quando chega um produto novo, costumo ser um dos primeiros a entendê-lo para depois treinar quem pede ajuda, de outros times inclusive. Apoio o time de Vendas explicando a parte técnica dos produtos, hoje com frequência em inglês, e dou bastante opinião nas discussões do time de produto.",
              ],
            },
            {
              label: "O que construí e aprendi",
              paras: [
                "O salto técnico foi grande. Na AllowMe o produto central era o Device Intelligence, a minha especialidade, e o Liveness era secundário. Na Serasa precisei aprender o portfólio inteiro e, ao mesmo tempo, ensinar os produtos que vinham da AllowMe para várias pessoas. Some a isso a rotina de uma aquisição, em que SDKs e APIs mudam para juntar o melhor das duas empresas, e adaptação a mudança virou parte do trabalho.",
                "Foi nesse contexto que criei o Serasa Studio Identity & Fraud, a plataforma interna que centraliza testes, demonstrações e troubleshooting dos produtos antifraude, reconhecida pela diretoria e aprovada para publicação corporativa.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "tecnologia",
      number: "02",
      label: "Tecnologia e IA",
      title: "Como eu faço as coisas acontecerem",
      lead: "Conhecimento de domínio define o que vale a pena construir. IA define a velocidade com que isso vira realidade. Aqui explico como as duas coisas funcionam juntas no meu trabalho.",
      beats: [
        {
          label: "De onde vem o que eu construo",
          paras: [
            "Tenho uma base técnica que construí ao longo dos anos: SQL, Python, JavaScript, React. Mais importante do que a lista de linguagens é o que essa base me dá: a capacidade de entender o problema antes de começar a construir, de conversar com engenharia de igual para igual e de saber o que é viável antes de propor qualquer coisa.",
            "O conhecimento de domínio em Identity & Fraud é o que define o que vale a pena construir. A IA é o que torna possível construir. Quando as duas coisas se combinam, o resultado é uma ferramenta que resolve um problema real, não um exercício técnico.",
          ],
        },
        {
          label: "Como a combinação funciona na prática",
          paras: [
            "O Serasa Studio é o exemplo mais completo. Eu sabia exatamente qual era o problema: conhecimento fragmentado, demos que dependiam de quem conhecia o Postman, troubleshooting sem ambiente centralizado. Sabia como devia funcionar, quais produtos precisavam estar lá, qual seria o fluxo de cada um. Com essa clareza, a IA me ajudou a transformar esse entendimento em código funcional, em React e Node.js, cobrindo onze produtos com chamadas reais.",
            "O mesmo raciocínio se aplica a projetos menores. Tenho um hobby como DJ e uso Python para automatizar partes do processo: organizar arquivos, corrigir metadados, montar vídeos. Problemas menores, mesma lógica: partir de um problema concreto, saber o que a solução precisa fazer e usar IA para fazer acontecer.",
          ],
        },
        {
          label: "Para onde isso vai",
          paras: [
            "A pergunta que me interessa não é quais linguagens eu domino, é quais problemas eu consigo resolver e com que velocidade. Com IA como acelerador, o gargalo deixou de ser a execução técnica e passou a ser a qualidade do entendimento do problema. É exatamente aí que seis anos em operação, implantação e contato direto com cliente fazem diferença.",
            "Quero continuar nessa direção: usar IA para construir ferramentas cada vez mais úteis, dentro e fora do trabalho, partindo sempre de um problema real que eu entendo bem.",
          ],
        },
      ],
    },
    {
      id: "competencias",
      number: "03",
      label: "Competências",
      title: "Tudo que eu domino",
      lead: "Em vez de uma lista, prefiro contar o que eu sei do jeito que uso no dia a dia.",
      beats: [
        {
          label: "O que eu faço há três anos",
          paras: [
            "Pego o cliente depois que o contrato é assinado. A partir daí, entendo o cenário dele antes de qualquer reunião técnica, conduzo o kickoff, fico do lado do desenvolvedor durante a integração e acompanho até a entrada em produção. Já fiz isso umas cinquenta vezes. Hoje toco cerca de vinte projetos ao mesmo tempo, em estágios completamente diferentes.",
            "O que mais aprendi nesse formato é ajustar o tom conforme quem está na sala. Com um dev, eu debugo junto. Com um gerente de projeto de banco, eu traduzo.",
          ],
        },
        {
          label: "Os produtos que eu conheço de verdade",
          paras: [
            "Liveness, Biometria Facial, FaceMatch, Device Intelligence, Documentoscopia, Captura e OCR, Background Check, Fraud Score, Score Laranja, LVS e KYC. Conheço de verdade no sentido de ter integrado, treinado, apresentado em demo e investigado bug em cada um. Não só lido a documentação.",
          ],
        },
        {
          label: "A base que veio do Nubank",
          paras: [
            "Antes de implantar soluções antifraude, eu as operava. KYC, análise documental, monitoramento de transações, controle de qualidade das análises do time. Isso foi no Nubank, em escala. Quando o cliente descreve um problema operacional, eu entendo o que ele está sentindo antes de ele terminar a frase. Essa experiência não tem substituto.",
          ],
        },
        {
          label: "Técnica",
          paras: [
            "SQL e Python no dia a dia, para análise, automações e scripts. REST APIs, SDKs e Postman para integração e troubleshooting. React e Node.js para construir. Com IA como parceira de execução, o Serasa Studio é o exemplo maior do que consigo fazer com essa combinação.",
          ],
        },
        {
          label: "Inglês e capacitação",
          paras: [
            "Conduzo kickoff, troubleshooting e alinhamento de produto em inglês com times nos Estados Unidos, Índia e China.",
            "Treinamento de equipe aparece desde o Nubank e eu carrego isso. Quando alguém de outro time precisa entender um produto porque os clientes deles vão começar a usar, esse conhecimento passa por mim. Gosto disso. Aprendo mais ensinando do que sendo ensinado. Tenho também bastante contato com o time de Vendas, explicando a parte técnica para clientes que ainda estão avaliando.",
          ],
        },
      ],
    },
  ],
  closing: {
    title: "Se quiser conversar",
    paras: [],
    ctaLabel: "Falar comigo",
  },
};

const en: StoryContent = {
  meta: {
    title: "Eric Cirillo, the full story",
    description:
      "The complete trajectory of Eric Cirillo, from commercial operations to technical reference in Identity & Fraud. How I arrived at each company, what I did, and what I learned.",
  },
  backLabel: "Back",
  eyebrow: "Full story",
  title: "How I got here",
  lead: "This is the long version, an open book about my career. Not the summarized resume. Here I tell how I arrived at each company, what I actually did day to day, what I built, what I learned, and why I moved on.",
  tocLabel: "Chapters",
  chapters: [
    {
      id: "trajetoria",
      number: "01",
      label: "Trajectory",
      title: "Company by company",
      lead: "The trajectory in order, with context that a resume cannot hold.",
      companies: [
        {
          id: "gf-casa-decor",
          name: "GF Casa Decor",
          role: "Sales Assistant",
          period: "Feb/2018 - Mar/2019",
          beats: [
            {
              label: "How I got there",
              paras: [
                "In high school I was not very engaged with studying, and for a while I confused that with not liking to learn. I discovered the opposite in my Business Management degree: when the subject interested me, I learned quickly and got genuinely involved. I enjoyed the strategic side of the course, from logistics to customer understanding, and did well in exams, projects, and presentations.",
                "That is where the opportunity appeared. A classmate owned GF Casa Decor and invited me to join the team.",
              ],
            },
            {
              label: "What I did",
              paras: [
                "GF was a very small company at the time, three partners, and I was one of the first employees. Because it was small, I did everything: customer service, sales, and administrative routines.",
              ],
            },
            {
              label: "What I built and learned",
              paras: [
                "That is where I learned, in practice, how a company works from the inside and the weight of having real responsibility. I left with a foundation in client relationships and communication that, years later, proved just as important as the technical side in Professional Services.",
              ],
            },
            {
              label: "How I left",
              paras: [
                "I stayed about a year and a bit. I left when I passed the Nubank selection process. I was a fan of the company and wanted to get in any way I could, for any role.",
              ],
            },
          ],
        },
        {
          id: "nubank",
          name: "Nubank",
          role: "Customer Excellence Analyst, Fraud Analyst I and II",
          period: "May/2019 - Jul/2021",
          beats: [
            {
              label: "How I got there",
              paras: [
                "I came in through the door many people used to build their careers there: Customer Experience. I performed well in that area, and at a moment when the fraud team was facing a large fraud wave and urgently needed people, they opened an internal selection. They chose those with the best performance cycle scores for a one-month trial in the anti-fraud area.",
                "Because of the urgency, it was not a typical selection process. It was learning by doing, one day in each area. For me it was practically a promotion. I went, liked the work a lot, and stayed.",
              ],
            },
            {
              label: "What I did",
              paras: [
                "I started by investigating fraud cases day to day: KYC, document analysis, transaction monitoring and compliance, at scale. I had strong performance in case resolution, and that was my first serious contact with SQL and indicator analysis.",
              ],
            },
            {
              label: "What I built and learned",
              paras: [
                "My first real project was born in that period, Apolo. The outsourced teams doing triage needed to ask us questions and there was no dedicated channel for it. Inspired by an initiative from another area, I built from scratch a simple system: a form that fed into a well-structured spreadsheet, through which we received and organized the questions. Solving that problem was when I discovered I enjoyed working with data and building tools to unblock processes.",
                "I was promoted to Analyst II, started doing quality control on the team's analyses, and handled the most complex fraud cases. I also supported the implementation of a facial recognition product, an AI model running on Nubank's base, validating whether it worked and recognized the right people.",
              ],
            },
            {
              label: "How I left",
              paras: [
                "There was a cut in my area and I ended up leaving. It was hard, because I really liked Nubank.",
              ],
            },
          ],
        },
        {
          id: "allowme",
          name: "AllowMe",
          role: "Fraud Analyst II, Professional Services",
          period: "Oct/2022 - Apr/2024",
          beats: [
            {
              label: "How I got there",
              paras: [
                "Between Nubank and AllowMe there was a gap of about fifteen months, and it was intentional. The fraud analyst roles that came up were, at that point, a step back for me in terms of compensation and type of work, so I preferred to wait for the right opportunity.",
                "I used the time to prepare. I took SQL and Python courses and built, on my own, a data analysis project about Corinthians, the team I support. I brought that project to the AllowMe interview, and it helped demonstrate that I already had a stronger technical base. That is how I got in.",
              ],
            },
            {
              label: "What I did",
              paras: [
                "This was my entry into Professional Services. I started implementing Identity & Fraud solutions end to end, side by side with client developers in REST API and SDK integrations, running technical kickoffs and troubleshooting, from commercial handoff to production go-live.",
              ],
            },
            {
              label: "What I built and learned",
              paras: [
                "It was a demanding transition, in a good way. I came from fraud analysis and all at once had to learn a lot of new things: reading implementation documentation, using Postman, genuinely understanding what an API and an SDK are, and integrating with product and engineering teams I had never worked with before.",
                "It was also my first contact with B2B clients, after an entire career in B2C. I had to learn to run meetings and communicate with very different profiles, from a developer at a small startup to a project manager at a large enterprise, adjusting tone for each one. The work stopped being sequential and operational and became strategic: I was thinking about the client's full flow, which required much more organization and discipline to keep track of several projects at once.",
                "I was lucky to find very good and very patient people who helped me make that shift.",
              ],
            },
            {
              label: "How I left",
              paras: [
                "AllowMe was acquired by Serasa Experian, and I came along. Since my work continued the same, the departure had no drama. It was more of a continuation than a break.",
              ],
            },
          ],
        },
        {
          id: "serasa-experian",
          name: "Serasa Experian",
          role: "Fraud Analyst III, Professional Services",
          period: "Jul/2024 - Present",
          beats: [
            {
              label: "How I got there",
              paras: [
                "I arrived at Serasa through the AllowMe acquisition, and this time the transition was smooth because the work continued the same. What changed was the scale. I joined a much larger team and was promoted quickly to senior, a promotion that had already been in motion at AllowMe. There I was the least senior in the group. At Serasa I became one of the technical references, with several mid-level and junior analysts around me.",
              ],
            },
            {
              label: "What I do",
              paras: [
                "I am the technical reference for a client portfolio throughout the entire implementation, from technical kickoff to production go-live. I run about 20 concurrent projects and technical meetings in English with teams in the United States, India and China, and investigate bugs together with product and engineering down to the root cause.",
                "A good part of my time is also spent unblocking people, something I was already doing back at Nubank when training triage teams. When a new product arrives, I am usually one of the first to understand it thoroughly and then train whoever asks for help, including from other teams. I support the Sales team by explaining the technical side of the products, increasingly in English, and I contribute a lot of input in product team discussions.",
              ],
            },
            {
              label: "What I built and learned",
              paras: [
                "The technical leap was significant. At AllowMe the core product was Device Intelligence, my specialty, and Liveness was secondary. At Serasa I had to learn the entire portfolio while simultaneously teaching the AllowMe products to many people. Add to that the routine of an acquisition, where SDKs and APIs change as the best of both companies gets merged, and adapting to change became part of the job.",
                "It was in that context that I created the Serasa Studio Identity & Fraud, the internal platform that centralizes testing, demonstrations and troubleshooting for the anti-fraud products, recognized by leadership and approved for corporate publication.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "tecnologia",
      number: "02",
      label: "Technology & AI",
      title: "How I make things happen",
      lead: "Domain knowledge defines what is worth building. AI defines how fast that becomes reality. Here I explain how both work together in my day to day.",
      beats: [
        {
          label: "Where what I build comes from",
          paras: [
            "I have a technical base I built over the years: SQL, Python, JavaScript, React. More important than the list of languages is what that base gives me: the ability to understand the problem before I start building, to talk with engineering as a peer, and to know what is feasible before proposing anything.",
            "Domain knowledge in Identity & Fraud defines what is worth building. AI is what makes it possible to build it. When the two combine, the result is a tool that solves a real problem, not a technical exercise.",
          ],
        },
        {
          label: "How the combination works in practice",
          paras: [
            "Serasa Studio is the most complete example. I knew exactly what the problem was: fragmented knowledge, demos that depended on whoever knew Postman, troubleshooting with no centralized environment. I knew how it should work, which products needed to be there, what the flow of each would look like. With that clarity, AI helped me turn that understanding into working code, in React and Node.js, covering eleven products with real API calls.",
            "The same reasoning applies to smaller projects. I have a hobby as a DJ and use Python to automate parts of the process: organizing files, fixing metadata, assembling videos. Smaller problems, same logic: start from a concrete problem, know what the solution needs to do, and use AI to make it happen.",
          ],
        },
        {
          label: "Where this is going",
          paras: [
            "The question that interests me is not which languages I know, but which problems I can solve and how fast. With AI as an accelerator, the bottleneck is no longer technical execution, it has become the quality of understanding the problem. That is exactly where six years in operations, implementation, and direct client contact make a difference.",
            "I want to keep going in this direction: using AI to build increasingly useful tools, inside and outside of work, always starting from a real problem I understand well.",
          ],
        },
      ],
    },
    {
      id: "competencias",
      number: "03",
      label: "Skills",
      title: "Everything I know",
      lead: "Not a keyword list. A map of what I can actually do, with enough context to understand where each skill came from and how it shows up in the work.",
      beats: [
        {
          label: "What I have been doing for three years",
          paras: [
            "I take over the client after the contract is signed. From there, I understand their scenario before any technical meeting, run the kickoff, stay alongside the developer during integration, and follow through to production go-live. I have done this about fifty times. Today I manage around twenty projects at once, at completely different stages.",
            "What I have learned most in this format is adjusting my tone based on who is in the room. With a developer, I debug alongside them. With a bank project manager, I translate.",
          ],
        },
        {
          label: "The products I truly know",
          paras: [
            "Liveness, Facial Biometrics, FaceMatch, Device Intelligence, Document Forensics, Document Capture, OCR, Background Check, Fraud Score, LVS and KYC. I know them in the sense of having integrated, trained, demoed, and investigated bugs in each one, not just read the documentation.",
          ],
        },
        {
          label: "The foundation that came from Nubank",
          paras: [
            "Before implementing anti-fraud solutions, I was operating them. KYC, document analysis, transaction monitoring, team analysis quality control. That was at Nubank, at scale. When a client describes an operational problem, I understand what they are feeling before they finish the sentence. That experience has no substitute.",
          ],
        },
        {
          label: "Technical",
          paras: [
            "SQL and Python day to day, for analysis, automations and scripts. REST APIs, SDKs and Postman for integration and troubleshooting. React and Node.js for building. With AI as an execution partner, Serasa Studio is the biggest example of what I can do with that combination.",
          ],
        },
        {
          label: "English and training",
          paras: [
            "I run kickoffs, troubleshooting sessions and product alignment in English with teams in the United States, India and China.",
            "Training shows up since Nubank and I carry it forward. When someone from another team needs to understand a product because their clients are about to start using it, that knowledge comes through me. I enjoy it. I learn more by teaching than by being taught. I also have a lot of contact with the Sales team, explaining the technical side of products to clients who are still evaluating.",
          ],
        },
      ],
    },
  ],
  closing: {
    title: "Get in touch",
    paras: [],
    ctaLabel: "Talk to me",
  },
};

const store: Record<Locale, StoryContent> = {
  pt,
  en,
};

export function getStory(locale: Locale): StoryContent {
  return store[locale];
}
