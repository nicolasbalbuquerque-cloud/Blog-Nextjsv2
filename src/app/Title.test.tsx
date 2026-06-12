import "@testing-library/jest-dom";
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page';

// CORREÇÃO: Moca o fetch globalmente para o ambiente Node/Jest não quebrar
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]), // Retorna uma lista vazia simulada de posts
    })
  ) as jest.Mock;
});

describe("Página Principal do Blog - Validação de Componente Real", () => {
  it("deve renderizar a estrutura inicial do blog com sucesso", async () => {
    // 1. Renderiza a página real tratando possíveis estados assíncronos
    render(<Home />);

    // 2. Procura por elementos que existam no cabeçalho ou estrutura base estática
    // Usamos queryByText para evitar quebras se o dado ainda estiver carregando
    const elementoEstrutura = screen.queryByRole('heading') || screen.queryByText(/Blog/i);
    
    // 3. Asserção base de carregamento
    expect(elementoEstrutura).toBeInTheDocument();
  });
});