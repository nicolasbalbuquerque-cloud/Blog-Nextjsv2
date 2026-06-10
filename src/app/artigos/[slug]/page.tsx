import Link from 'next/link';
import { notFound } from 'next/navigation';
import { metodosMCDM } from '../../../data/metodos';
import styles from '../../../styles/blog.module.css';

interface ArtigoProps {
  params: Promise<{ slug: string }> | { slug: string };
}

// 🟢 Requisito 3: SEO Dinâmico gerando metadados científicos específicos por artigo
export async function generateMetadata({ params }: ArtigoProps) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.slug);
  const metodo = metodosMCDM[id];

  if (!metodo) {
    return { title: 'Artigo Não Encontrado | MCDM Blog' };
  }

  return {
    title: `${metodo.sigla} - Análise Multicritério`,
    description: metodo.resumo,
  };
}

// 🟢 Requisito 2: Server Component renderizando dados profundos
export default async function ArtigoDetailPage({ params }: ArtigoProps) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.slug);
  const metodo = metodosMCDM[id];

  if (!metodo) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← Voltar para a biblioteca de métodos
      </Link>
      
      <article>
        <span className={styles.meta}>Revisão de Literatura • ID #{metodo.id}</span>
        <h1 className={styles.articleTitle}>{metodo.titulo}</h1>
        
        <div className={styles.conteudoCompleto}>
          <p>{metodo.conteudo}</p>
          <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '40px', borderTop: '1px solid #334155', paddingTop: '20px' }}>
            * Conteúdo estruturado para fins de validação acadêmica e modelagem de tomada de decisão em cenários de risco.
          </p>
        </div>
      </article>
    </div>
  );
}