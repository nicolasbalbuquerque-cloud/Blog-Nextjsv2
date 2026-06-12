Blog Corporativo - Next.js com CI/CD Pipeline
Este projeto consiste em um Blog desenvolvido com Next.js estruturado com uma esteira automatizada de Integração Contínua (CI) e Entrega Contínua (CD) utilizando GitHub Actions e deploy automático na plataforma Vercel.

Tecnologias Utilizadas
Framework: Next.js (App Router)

Linguagem: TypeScript

Ambiente de Testes: Jest & React Testing Library

Automação de CI/CD: GitHub Actions

Hospedagem: Vercel

Como Executar o Projeto Localmente
1. Instalação das Dependências
Para instalar de forma limpa e segura todos os pacotes do ecossistema mapeados no projeto:

npm install

2. Executar em Modo de Desenvolvimento
Para levantar o servidor local e visualizar o blog em tempo real:

npm run dev

3. Executar o Linter (Análise Estática)
Para validar regras de padronização, boas práticas e consistência do código:

npm run lint

4. Executar os Testes Automatizados
Para disparar a suíte de testes reais do Jest locais:

npm test

5. Compilar para Produção (Build)
Para compilar e otimizar a aplicação gerando os arquivos de produção:

npm run build

Pipeline de CI/CD (GitHub Actions)
O projeto possui um workflow integrado que intercepta cada alteração enviada ao repositório para garantir a integridade do código antes do deploy.

Como verificar e acompanhar a pipeline:
Acesse a aba Actions localizada no menu superior deste repositório no GitHub.

Clique no workflow ou commit mais recente listado na tela.

Você verá os logs de execução divididos nas etapas estruturais descritas abaixo:

Install dependencies: Instalação profissional usando npm ci.

Run Lint: Verificação de análise estática do código.

Run Tests: Execução de testes que validam as páginas reais do projeto.

Build Application: Teste estrito de compilação da build.

Para monitorar diretamente, acesse: Histórico do GitHub Actions

Link de Deploy Oficial
O deploy é gerado de forma totalmente automatizada a cada atualização integrada na branch principal:

Link: https://blog-gr8b9ok93-nicolasbalbuquerque-clouds-projects.vercel.app/