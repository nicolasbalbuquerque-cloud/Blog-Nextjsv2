import "@testing-library/jest-dom"; // Importa as extensões de asserção do Jest para o DOM
import React from 'react';
import { render, screen } from '@testing-library/react';

// Criamos um Componente simples diretamente aqui para testar o comportamento
interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return <h1 style={{ color: '#ffffff' }}>{children}</h1>;
}

// 🟢 Bloco de Teste Automatizado com Jest e React Testing Library
test("Renderizar o titulo com o texto correto", () => {
  const textoTitulo = "Método MAUT - Análise Multicritério";

  // 1. Renderiza o componente React em um navegador simulado (jsdom)
  render(<Title>{textoTitulo}</Title>);

  // 2. Procura na tela pelo texto exato que passamos para o componente
  const elementoTitulo = screen.getByText(textoTitulo);

  // 3. Asserção: Espera que o elemento HTML esteja fisicamente presente na página
  expect(elementoTitulo).toBeInTheDocument();
});