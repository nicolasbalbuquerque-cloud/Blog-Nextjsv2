import "@testing-library/jest-dom";
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page';

// Moca o fetch globalmente para o ambiente Node/Jest não estourar erros de rede
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    })
  ) as jest.Mock;
});

describe("Página Principal do Blog - Validação de Componente Real", () => {
  it("deve renderizar a estrutura inicial do blog resolvendo o componente assíncrono", async () => {
    // 1. Resolve o Server Component Assíncrono para obter o JSX
    const ResolvedPageComponent = await (Home as any)({});

    // 2. Renderiza o resultado resolvido
    render(ResolvedPageComponent);

    // 3. Busca especificamente pelo cabeçalho principal do seu Blog
    const elementoTitulo = screen.getByRole('heading', { 
      name: /Decisão Multicritério em Foco/i 
    });
    
    // 4. Asserção final: Garante que o título principal está renderizado no DOM
    expect(elementoTitulo).toBeInTheDocument();
  });
});