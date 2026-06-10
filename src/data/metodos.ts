export interface MetodoMCDM {
  id: number;
  titulo: string;
  sigla: string;
  resumo: string;
  conteudo: string;
}

export const metodosMCDM: Record<number, MetodoMCDM> = {
  1: {
    id: 1,
    sigla: "MAUT",
    titulo: "Multi-Attribute Utility Theory (MAUT): Estruturando Preferências sob Incerteza",
    resumo: "Uma abordagem axiomática clássica para agregar múltiplos atributos em uma única função de utilidade escalar, amplamente utilizada na análise de riscos e resiliência de infraestruturas.",
    conteudo: "A Teoria da Utilidade Multiatributo (MAUT) quantifica as preferências do tomador de decisão face a múltiplos critérios de avaliação sob condições de certeza ou incerteza. Através da construção de funções de utilidade marginais para cada atributo e da definição de pesos de compensação, o método consolida uma métrica única de utilidade global. É uma ferramenta indispensável quando se deseja modelar a aversão ou propensão ao risco em sistemas complexos de engenharia e planejamento urbano."
  },
  2: {
    id: 2,
    sigla: "AHP",
    titulo: "Analytic Hierarchy Process (AHP): A Tomada de Decisão Estruturada em Hierarquias",
    resumo: "Desenvolvido por Thomas Saaty, o AHP utiliza comparações pariformes em matrizes de decisão baseadas em uma escala fundamental de importância absoluta.",
    conteudo: "O Processo Hierárquico Analítico (AHP) divide um problema de decisão complexo em uma hierarquia de objetivos, critérios, subcritérios e alternativas. A grande vantagem do AHP reside na habilidade de mensurar critérios tangíveis e intangíveis por meio de julgamentos par a par (pairwise comparisons). O método também calcula uma razão de consistência (CR) matemática para garantir que as avaliações do tomador de decisão não sejam contraditórias ou aleatórias."
  },
  3: {
    id: 3,
    sigla: "TOPSIS",
    titulo: "TOPSIS: Maximizando a Distância da Solução Ideal Negativa",
    resumo: "A técnica de preferência por similaridade à solução ideal ordena alternativas com base na menor distância geométrica da solução ideal positiva.",
    conteudo: "O método TOPSIS (Technique for Order of Preference by Similarity to Ideal Solution) baseia-se no conceito de que a alternativa selecionada deve ter a menor distância euclidiana possível da Solução Ideal Positiva (PIS) e, simultaneamente, a maior distância da Solução Ideal Negativa (NIS). É um método altamente intuitivo, computacionalmente eficiente e amplamente aplicado no ranqueamento de projetos de engenharia civil, infraestrutura e logística."
  },
  4: {
    id: 4,
    sigla: "ELECTRE",
    titulo: "Família ELECTRE: Modelagem de Preferências por Relações de Sobreclassificação",
    resumo: "Conheça os métodos baseados em relações de sobreclassificação (outranking) que aceitam a incomparabilidade entre alternativas complexas.",
    conteudo: "Os métodos da família ELECTRE (I, II, III, IV, TRI) baseiam-se na construção e exploração de relações de sobreclassificação. Diferente dos métodos que agregam tudo em uma única nota compensatória, o ELECTRE valida se uma alternativa domina outra através de testes de concordância e discordância baseados em limiares de veto. É a escolha ideal quando o tomador de decisão lida com critérios heterogêneos e deseja admitir a incomparabilidade entre alternativas."
  }
};