# Handoff: Landing page pessoal de Eric Cirillo (tema escuro)

## Overview
Vitrine profissional de uma pessoa (não um produto): Eric Cirillo, Implementation
Specialist em Identity & Fraud / Professional Services. Público: recrutadores e
gestores de tecnologia B2B. Esta entrega é o **redesign em tema escuro** da página,
mantendo a identidade sóbria, editorial e monocromática (com tons de chumbo para
dar profundidade), com toggles de **idioma (PT/EN)** e **tema (escuro/claro)**.

## About the design files
O arquivo `Eric Cirillo — Landing.dc.html` neste bundle é uma **referência de
design feita em HTML** — um protótipo que mostra a aparência e o comportamento
pretendidos, **não código de produção para copiar direto**. A tarefa é
**recriar este design no codebase alvo** (Astro 5 `.astro` + Tailwind v4 com tokens
em `@theme`), usando os padrões já estabelecidos do projeto. Textos são bilíngues e
vivem em arquivos i18n separados — **não fixe textos no layout**, trate-os como
variáveis (veja a seção "Conteúdo / i18n").

> Nota de leitura do arquivo de referência: ele é um "Design Component". O markup
> usa `style="..."` inline e holes `{{ chave }}`; a lógica (paleta, estado, textos)
> está no `<script data-dc-script>` no fim do arquivo, na classe `Component`. Toda
> a fonte de verdade de cores, escala e cópia está ali — este README resume e
> mapeia tudo para o seu stack.

## Fidelity
**Alta fidelidade (hifi).** Cores, tipografia, espaçamentos e interações são finais.
Recriar pixel-perfect usando as libs/padrões do codebase. Onde o protótipo usa um
truque do ambiente de preview (ver "Notas de implementação"), aplique o equivalente
idiomático em Astro/CSS.

---

## Design tokens

Paleta com papéis nomeados. O design tem **dois temas**; como `@theme` do Tailwind v4
é estático, recomendo declarar os tokens base em `@theme` e sobrescrever as cores por
tema com `[data-theme="..."]` em `global.css`.

### Cores — tema ESCURO (default)
| Papel | Token | HEX / valor |
|---|---|---|
| Fundo base | `--color-bg` | `#0B0B0C` |
| Fundo (glow chumbo) | `--bg-grad` | `radial-gradient(125% 80% at 50% -12%, #1B2027 0%, #121519 38%, #0B0B0C 100%)` |
| Superfície elevada (painel) | `--panel` | `linear-gradient(180deg, #191D23 0%, #121419 100%)` |
| Superfície sólida | `--color-surface` | `#161A1F` |
| Texto principal | `--color-text` | `#F2F2F3` |
| Texto secundário | `--color-text-2` | `#A4A6AC` |
| Label / metadado | `--color-meta` | `#7E828B` |
| Régua / hairline | `--color-rule` | `rgba(255,255,255,0.085)` |
| Hairline forte | `--color-rule-strong` | `rgba(255,255,255,0.17)` |
| Número fantasma | `--color-ghost` | `rgba(160,178,198,0.035)` |
| Sombra de profundidade | `--shadow` | `inset 0 1px 0 rgba(255,255,255,0.045), 0 24px 60px -34px rgba(0,0,0,0.85)` |

### Cores — tema CLARO
| Papel | HEX / valor |
|---|---|
| Fundo base | `#FBFBFA` |
| Fundo (gradiente) | `radial-gradient(125% 80% at 50% -12%, #FFFFFF 0%, #F6F6F3 45%, #ECECE8 100%)` |
| Superfície (painel) | `linear-gradient(180deg, #FFFFFF 0%, #F3F3F0 100%)` |
| Superfície sólida | `#F1F1EF` |
| Texto principal | `#111113` |
| Texto secundário | `#55555B` |
| Label / metadado | `#8C8C92` |
| Régua / hairline | `rgba(0,0,0,0.10)` |
| Hairline forte | `rgba(0,0,0,0.20)` |
| Número fantasma | `rgba(40,46,54,0.045)` |
| Sombra | `inset 0 1px 0 rgba(255,255,255,0.7), 0 22px 48px -32px rgba(20,22,28,0.28)` |

### Acento (único, neutro frio)
- Default atual: `--color-accent: #A9A2B4` (taupe frio).
- Alternativas válidas (mesma família, sem virar cor viva): `#9FB1C6`, `#8FA6BF`, `#B7ADA0`.
- Header também usa o acento translúcido no blur: dark `rgba(13,15,18,0.62)`, light `rgba(251,251,250,0.7)`.

### Escala tipográfica
Tamanhos são fluidos via `clamp(min, vw, max)`.

| Papel | Família | Peso | Tamanho | line-height | letter-spacing |
|---|---|---|---|---|---|
| Display (nome hero) | Inter Tight | 600 | `clamp(56px,11.5vw,168px)` | 0.9 | -0.04em |
| Statement (hero) | Inter Tight | 500 | `clamp(24px,3.6vw,46px)` | 1.08 | -0.015em |
| Título de seção | Inter Tight | 600 | `clamp(40px,6vw,84px)` | 0.95 | -0.035em |
| Subtítulo / kicker | Inter Tight | 500 | `clamp(19px,2vw,26px)` | 1.3 | -0.01em |
| Número (stat) | Inter Tight | 600 | `clamp(40px,5vw,64px)` | 1 | -0.03em |
| Número (métrica) | Inter Tight | 600 | `clamp(28px,3vw,40px)` | 1 | -0.02em |
| Corpo | Geist | 400 | 16–17px | 1.6–1.65 | normal |
| Corpo menor (módulo) | Geist | 400 | 15–15.5px | 1.55 | normal |
| Label / mono | Geist Mono | 400/500 | 10–12px (uppercase) | — | 0.13em–0.22em |

### Espaçamento e ritmo
- Container: `max-width: 1180px`, gutter lateral `40px`.
- Padding vertical das seções: `clamp(80px, 10vw, 130px)` topo e base.
- Cada seção separada por `border-top: 1px solid var(--color-rule)`.
- Hero: padding topo `clamp(72px,11vw,140px)`, base `clamp(60px,8vw,100px)`.
- Raio: painéis `12–14px`; botões hairline sem raio (retangulares); foto `50%`.
- Mobile (`max-width: 768px`): grids de 2 colunas viram 1 coluna; nav some
  (prever menu/âncoras); números fantasma reduzem para `120px`.

---

## Section map
Ordem fixa (não alterar). Todas centradas no container de 1180px.

1. **Header (sticky)** — `position: sticky; top:0`, fundo translúcido + `backdrop-filter: blur(16px)`, hairline na base. Esquerda: wordmark "Eric Cirillo" (Inter Tight 600, 16px). Direita: nav (4 âncoras em Geist Mono uppercase), divisória vertical, toggle **PT / EN**, botão de **tema** (bolinha de acento + label "Claro/Escuro").
2. **Hero** (`#top`) — eyebrow (bolinha acento + posicionamento em mono) → nome em escala dramática → statement ("Tecnologia não é o objetivo. É a ferramenta.") → sub (1 frase) → 2 CTAs (primário = hairline forte; secundário = hairline fraco). O glow de chumbo no fundo dá a profundidade do topo.
3. **Stats** — grid `repeat(auto-fit, minmax(150px,1fr))`, 5 itens; cada célula com `border-left` hairline, número grande (Inter Tight) + label mono. Sem padding vertical da seção (as células têm o seu).
4. **Sobre** (`#sobre`, fantasma "01") — grid 2 col `minmax(0,300px) / 1fr`. Coluna esquerda: **foto redonda colorida** (`aspect-ratio:1/1`, `border-radius:50%`, `object-fit:cover`, `object-position:50% 30%`) dentro de um anel `--panel` com `--shadow` e `border 1px --rule-strong`; abaixo, label "Sobre". Direita: 3 parágrafos (1º em Inter Tight 500 destaque, 2º/3º em Geist secundário).
5. **Serasa Studio** (`#studio`, fantasma "02") — **enquadrar como evidência de trabalho, nunca produto.** Topo: label "Evidência de trabalho" (em cor de acento) + tag "Uso interno" (mono em moldura hairline) + stack à direita. Título "Serasa Studio" + kicker + intro (1ª pessoa). 4 **módulos** em grid `minmax(250px,1fr)`, cada um num **painel elevado** (`--panel`, `border --rule`, raio 14px, `--shadow`); índice mono em acento + título + descrição. Abaixo, strip de 4 **métricas** (border-top + border-left hairlines). Por fim, **barra de acento vertical** + frase de reconhecimento (usar "reconhecido pela diretoria", nunca "premiado").
6. **Experiência** (`#experiencia`, fantasma "03") — label + timeline; cada item é grid `minmax(0,180px) / 1fr` com `border-top` hairline: data (mono) | empresa (Inter Tight) + cargo (mono meta) + 1 linha de descrição. 4 itens: Serasa Experian, AllowMe, Nubank, GF Casa Decor.
7. **Competências** (fantasma "04") — grid 2 col `minmax(0,200px)/1fr`: label à esquerda; à direita, grid de itens (cada um com quadradinho de acento 4×4 + hairline-top) e, abaixo, bloco "Produtos dominados" terminando em "entre outros." (lista nunca fechada).
8. **Contato** (`#contato`, fantasma "05") — grid `1.4fr / 1fr`. Esquerda: label + frase + e-mail em escala grande (link, hover acento) + LinkedIn + localização. Direita: label "Downloads" + 2 botões em **painel elevado** (Currículo PDF, Career Bible PDF).
9. **Footer** — hairline-top, dois textos mono uppercase (nome+local / tagline+ano).

---

## Interactions & behavior
- **Toggle idioma (PT/EN):** troca todo o conteúdo textual. Estado `lang`. Item ativo em `--color-text`, inativo em `--color-meta`.
- **Toggle tema (escuro/claro):** estado `theme`. Troca a paleta inteira (variáveis CSS) e o `background` do `<body>`. Label do botão mostra o tema-alvo ("Claro" quando escuro, e vice-versa).
- **Hovers (secos, só CSS):** nav e links → de `--color-text-2`/`--color-meta` para `--color-text`; CTA primário e botões de download → borda passa a `--color-accent`; e-mail → cor vira acento; módulos → borda de `--rule` para `--rule-strong`.
- **Scroll:** `scroll-behavior: smooth` + `scroll-padding-top: 84px` para as âncoras compensarem o header sticky.
- **Transições:** apenas CSS (cor/borda em hover). Sem libs de animação.
- **Responsivo:** ver breakpoint 768px na seção de espaçamento.

## State management
Apenas estado de UI local (sem data fetching):
- `lang: 'pt' | 'en'` (default `'pt'`).
- `theme: 'dark' | 'light'` (default `'dark'`).
- No protótipo, `theme` também escreve `document.body.style.background` (base sólida) para evitar que o fundo do body vaze atrás do gradiente. Em Astro, prefira aplicar `data-theme` no `<html>`/`<body>` e definir o `background` base por tema no CSS — e considere persistir a escolha em `localStorage` e respeitar `prefers-color-scheme`.

## Conteúdo / i18n
Todo o texto PT/EN está no objeto `PACK = { pt: {...}, en: {...} }` dentro do
`<script data-dc-script>` do arquivo de referência — use-o como fonte de verdade para
popular seus arquivos i18n. Estrutura de chaves: navegação, hero (eyebrow, nome,
statement, sub, ctas), `stats[]`, sobre (label, p1–p3), studio (label, tag, stack,
título, kicker, intro, `modules[]`, `metrics[]`, recognition), `experiences[]`,
competências (`competencias[]`, produtos, tail), contato (label, linha, email,
location, downloads, dl1, dl2), footer.

**Regras de conteúdo (valem para qualquer ajuste de texto):** sem emojis; sem
travessões (— ou –), usar vírgula/ponto/parênteses; primeira pessoa; tom direto; o
Serasa Studio foi **reconhecido** pela diretoria (nunca "premiado"/"eleito"); a lista
de produtos sempre admite "entre outros".

## Accessibility
- Contraste (texto sobre fundo base): principal `#F2F2F3` em `#0B0B0C` ≈ 15:1; secundário `#A4A6AC` ≈ 7:1 (AA); acento ≈ 7:1. `--color-meta` é usado só em labels decorativos curtos.
- Foco visível global: `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }`.
- Números fantasma e bolinhas decorativas são `aria-hidden`. A foto tem `alt="Eric Cirillo"`.
- Garanta navegação por teclado nos toggles (são `<button>`).

## Performance
- Sem bibliotecas de animação; transições puramente CSS.
- Fontes self-hosted (ver abaixo); evitar CDN do Google em produção.
- Imagem única (foto); otimizar/servir responsiva.

## Fonts
**Inter Tight** (display/títulos), **Geist** (corpo), **Geist Mono** (labels/metadados).
Assumir **self-hosted** (o protótipo só carrega via Google Fonts para preview — não
portar esse `<link>`). Pesos usados: Inter Tight 500/600; Geist 400/500; Geist Mono 400/500.

## Assets
- `assets/eric.png` — foto de Eric (782×791, colorida). No design é exibida redonda
  (`border-radius:50%`, `object-fit:cover`, foco no rosto via `object-position:50% 30%`).
- Os 2 botões de download apontam para `#` (placeholder) — plugar os PDFs reais
  (Currículo, Career Bible).

## Notas de implementação (truques do protótipo → equivalente Astro)
- A paleta é injetada como **CSS custom properties** num wrapper raiz; no seu projeto,
  declare em `:root`/`[data-theme]` em `src/styles/global.css` e exponha em `@theme`.
- O `background` do wrapper usa o gradiente de chumbo; defina-o no contêiner raiz da
  página e o `background` base (sólido) no `<body>` por tema.
- "Painéis elevados" = `background: var(--panel); border: 1px solid var(--color-rule);
  border-radius: 12–14px; box-shadow: var(--shadow);`.

## Files
- `Eric Cirillo — Landing.dc.html` — protótipo de referência (markup + paleta + conteúdo PT/EN + estado).
- `assets/eric.png` — foto.
- `README.md` — este documento (auto-suficiente).
