import "@testing-library/jest-dom"; // Importa as extensões de asserção do Jest para o DOM
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page'; //  Importa a página REAL do seu blog

//  Bloco de Teste Automatizado Real com Jest e React Testing Library
describe("Página Principal do Blog - Validação de Componente Real", () => {
  it("deve renderizar a estrutura inicial do blog com sucesso", () => {
    // 1. Renderiza a página real do blog no ambiente simulado (jsdom)
    render(<Home />);

    // 2. Procura na tela pelo termo principal "Blog" (comum no cabeçalho ou títulos)
    // Usamos a expressão regular /Blog/i para ignorar maiúsculas/minúsculas
    const elementoEstrutura = screen.getByText(/Blog/i);

    // 3. Asserção: Garante que a aplicação real está carregando os elementos em tela
    expect(elementoEstrutura).toBeInTheDocument();
  });
});