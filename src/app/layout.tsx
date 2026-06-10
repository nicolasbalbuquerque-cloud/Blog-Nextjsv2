import React from 'react';
import '../styles/globals.css';

export const metadata = {
  title: 'Meu Blog Técnico',
  description: 'Artigos sobre desenvolvimento web e Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}