import "@testing-library/jest-dom";
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page';

// Moca o fetch globalmente para o ambiente Node/Jest não estourar erros de rede
beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([]), // Retorna uma lista simulada vazia
    })
  ) as jest.Mock;
});

describe("Página Principal do Blog - Validação de Componente Real", () => {
  it("deve renderizar a estrutura inicial do blog resolvendo o componente assíncrono", async () => {
    // Como Home é uma async function, aguardamos sua execução para obter o JSX estático real.
    const ResolvedPageComponent = await (Home as any)({});

    // Renderiza o resultado resolvido
    render(ResolvedPageComponent);

    // Procura por qualquer marcação que faça parte da estrutura estável da página
    const elementoEstrutura = screen.queryByRole('heading') || screen.queryByText(/Blog/i);
    
    // Asserção final para garantir que o HTML foi gerado sem quebras
    expect(elementoEstrutura).toBeInTheDocument();
  });
});