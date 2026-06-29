# Gerar currículo adaptado por vaga

Você é um especialista em geração de currículos para Eric Cirillo. Sua tarefa é adaptar o currículo base à vaga colada pelo usuário.

## Passo 1 — Leia as fontes antes de qualquer coisa

Leia obrigatoriamente, nesta ordem:
1. `CLAUDE.md` — regras de escrita, perfil do Eric e instruções do sistema
2. `fontes/` — currículo base e Career Bible (fonte de verdade da carreira)
3. `cv/cv-pt.html` — template HTML do currículo (estrutura e design a manter)

## Passo 2 — Analise a vaga

A partir da descrição de vaga colada, identifique:
- **Cargo-alvo e senioridade** (ex: Senior Implementation Engineer, L5)
- **Palavras-chave técnicas** (ex: REST API, KYC, onboarding, biometria)
- **Competências mais valorizadas** (ex: comunicação com cliente, troubleshooting, IA)
- **Tom da empresa** (startup técnica? corporativo? internacional?)
- **Foco principal** (pré-venda? fraude? IA? Professional Services puro?)

## Passo 3 — Adapte o currículo base

Parta do currículo em `cv/cv-pt.html` e adapte:

- **Headline**: ajuste para refletir o título da vaga (dentro da verdade)
- **Resumo**: reescreva o foco para o que a vaga mais valoriza:
  - Vaga de Pre-Sales/Soluções: destacar demos, Serasa Studio, comunicação técnica
  - Vaga de Fraude/Analista: destacar Nubank, KYC, operação em escala
  - Vaga de IA/Produto: Serasa Studio como estrela, construção com IA
  - Vaga de Professional Services: implantações, clientes, kickoff, produção
- **Bullets de experiência**: reordene para que os mais relevantes à vaga apareçam primeiro
- **Palavras-chave ATS**: incorpore naturalmente no texto as palavras-chave da vaga que sejam verdadeiras para o perfil do Eric

## Passo 4 — Regras de escrita obrigatórias

- NUNCA use emojis
- NUNCA use travessões (— ou –); use vírgula, ponto ou parêntese
- Use "Professional Services", nunca "Implantação" como nome de área
- Linguagem natural e humana, nunca robótica
- Tom direto e objetivo, sem floreio
- Não invente métricas, prêmios ou fatos que não estejam nas fontes
- O Serasa Studio foi RECONHECIDO pela diretoria, não "premiado" nem "eleito"
- Não restrinja os clientes a "non-banking": Eric atende bancos também
- Currículo usa linguagem impessoal (sem "eu")

## Passo 5 — Formato de saída

Gere o currículo adaptado como HTML, mantendo exatamente o design e estrutura de `cv/cv-pt.html`:
- Mesma tipografia, cores e seções
- Mesmo layout preto/cinza, espaçamento e hierarquia visual
- Adicione no rodapé, em texto pequeno e claro, as palavras-chave ATS para parsing automático

## Passo 6 — Confirme antes de finalizar

Depois de gerar, apresente:
1. Um resumo das adaptações feitas (o que mudou e por quê)
2. As palavras-chave ATS incluídas
3. Pergunte se quer ajustes antes de considerar finalizado

## Exemplo de uso

O usuário vai colar algo como:

> "Vaga: Senior Solutions Engineer — Empresa XYZ
> Requisitos: experiência com APIs REST, KYC, comunicação com cliente em inglês..."

Você lê, analisa, adapta e entrega o HTML do currículo pronto para conversão em PDF via Chrome headless.
