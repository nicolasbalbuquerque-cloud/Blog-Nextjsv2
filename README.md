# Pipeline do Blog Multicriterio

Este projeto possui uma esteira automatizada de Integração Contínua (CI) e Entrega Contínua (CD) configurada através do GitHub Actions.

## Link do Projeto de Engenharia Resiliente
O deploy automatizado foi realizado com sucesso e a aplicação está oficialmente publicada na nuvem:
**[Clique aqui para acessar o Blog Multicriterio - https://blog-gr8b9ok93-nicolasbalbuquerque-clouds-projects.vercel.app**

## 🛠️ Tecnologias e Recursos Utilizados no Workflow:
- **CI (Integração Contínua):** Validação estrita via `npm ci`, análise estática com `ESLint`, execução de testes com `jest` e simulação de build local do Next.js.
- **CD (Entrega Contínua):** Deploy automatizado em ambiente de produção na `Vercel` integrado via Secrets do GitHub.