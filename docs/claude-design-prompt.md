# Prompt para o Claude Design, redesign em tema escuro

> Cole o texto abaixo no Claude Design junto com o print do site. As "Instruções
> de handoff" no final são o que garante que o resultado volte fácil para o
> código atual (Astro + Tailwind v4).

---

## Contexto

Esta é a landing page pessoal de **Eric Cirillo**, Implementation Specialist em
Identity & Fraud e Professional Services, com mais de 6 anos de carreira (Nubank,
AllowMe, Serasa Experian). O site é uma vitrine profissional para recrutadores e
gestores de empresas de tecnologia B2B. Não é um produto, é a carreira de uma
pessoa. O projeto em destaque é o Serasa Studio, uma plataforma interna que ele
construiu sozinho usando IA, e ele deve aparecer como **prova do trabalho dele**,
nunca como um produto sendo vendido.

O print anexo mostra a versão atual, em tema claro.

## Identidade visual a preservar

Sóbrio, editorial, monocromático (preto, cinza, branco), tipografia como
protagonista, muito respiro, réguas finas entre seções, números gigantes em marca
d'água ao fundo de cada seção ("01", "02"...), estética de documento. Sem cores
vivas. Um único acento neutro frio é permitido, com parcimônia, em hovers e
detalhes.

Tipografia atual (manter): **Inter Tight** (títulos/display), **Geist** (corpo),
**Geist Mono** (labels e metadados em maiúsculas com letter-spacing largo).

## O que eu quero

Refazer o site em **tema escuro**, mantendo a mesma identidade sóbria e a mesma
estrutura de seções. Não quero um dark mode "invertido na força bruta": quero um
tema escuro pensado, com hierarquia, profundidade por superfícies e contraste
correto.

Diretrizes para o escuro:
- Fundo quase preto, não preto puro (evitar #000000 chapado).
- Superfícies elevadas sutis para separar blocos, sem virar "cards" pesados.
- Réguas finas e números fantasma ainda mais discretos, integrados ao fundo.
- Texto com contraste AA no mínimo. Hierarquia clara entre título, corpo e label.
- O acento neutro frio pode ganhar um pouco mais de presença no escuro, sem
  virar cor viva.

## Estrutura (não mudar a ordem das seções)

1. Header fixo com nome, navegação e toggle de idioma (PT/EN).
2. Hero: nome em escala dramática, eyebrow com o posicionamento, frase de impacto
   ("Tecnologia não é o objetivo. É a ferramenta."), dois CTAs.
3. Stats: 6+ anos, 100+ clientes, 50 implantações, 11 produtos, 20 projetos.
4. Sobre: três parágrafos em primeira pessoa.
5. Serasa Studio: enquadrado como prova do trabalho, com 4 módulos, métricas
   discretas e o reconhecimento da diretoria. Cuidar para NÃO parecer landing de
   produto.
6. Experiência: timeline (Serasa, AllowMe, Nubank, GF Casa Decor).
7. Competências e produtos dominados.
8. Contato e Downloads (currículo e Career Bible em PDF).
9. Footer.

## Onde eu quero suas ideias de melhoria

Fique à vontade para propor melhorias, contanto que respeitem a sobriedade e a
identidade de documento. Em especial:
- Como dar mais impacto ao hero no escuro sem apelar para efeitos chamativos.
- Como apresentar o Serasa Studio como evidência de competência, e não como
  produto (esse é o ponto mais sensível).
- Hierarquia tipográfica e ritmo vertical entre as seções.
- Microinterações mínimas e secas (a sobriedade é a mensagem).
- Tratamento dos números fantasma no fundo escuro.

Se tiver ideias melhores que fujam um pouco do que descrevi, mostre, mas explique
o porquê.

## Regras de conteúdo (valem para qualquer texto que você gerar ou ajustar)

- Sem emojis.
- Sem travessões (— ou –). Usar vírgula, ponto ou parênteses.
- Primeira pessoa.
- Tom direto, sem adjetivos corporativos vazios.
- O Serasa Studio foi RECONHECIDO pela diretoria, nunca "premiado" nem "eleito".
- Os produtos dominados não são uma lista fechada, sempre cabe "entre outros".

---

## Instruções de handoff (importante para a implementação)

O resultado será implementado neste stack, então me entregue algo que eu consiga
portar sem reescrever do zero:

- **Stack alvo:** Astro 5 (componentes `.astro`, sem React) + **Tailwind v4** com
  tokens em `@theme` (variáveis CSS). Conteúdo é bilíngue e vive em arquivos i18n
  separados, então **não fixe textos no layout**, trate-os como variáveis.
- **Entregue tokens, não só telas.** Preciso de:
  - Paleta em HEX com papéis nomeados (fundo base, superfície elevada, texto
    principal, texto secundário, label/metadado, régua/hairline, acento, acento
    suave).
  - Escala tipográfica (tamanhos, pesos, line-height, letter-spacing) para
    display, título de seção, corpo, label e mono.
  - Espaçamentos verticais entre seções e ritmo interno.
- **Mapeie por seção.** Para cada seção, descreva o layout em termos de grid,
  alinhamento e hierarquia, idealmente referenciando os nomes de seção acima.
- **Formato preferido de saída:** HTML semântico + CSS (ou utilitários no estilo
  Tailwind) que eu consiga converter para `.astro`. Se gerar React/JSX, mantenha
  apenas como referência visual, sem lógica de estado.
- **Acessibilidade:** indique os pares de contraste usados (texto sobre fundo) e
  garanta foco visível.
- **Performance:** sem bibliotecas pesadas de animação. Transições via CSS.
- **Fontes:** assumir Inter Tight, Geist e Geist Mono já self-hosted. Não trocar
  por fontes do Google CDN.

Quando você devolver o design, eu (Claude Code) implemento atualizando os tokens
em `src/styles/global.css` e ajustando os componentes `.astro` seção a seção.
