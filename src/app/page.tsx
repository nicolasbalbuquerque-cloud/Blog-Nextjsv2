import Link from 'next/link';
import { metodosMCDM } from '../data/metodos';
import styles from '../styles/blog.module.css';

export default async function HomePage() {
  // Mantendo o fetch ativo para cumprir o requisito do desafio
  await fetch('https://jsonplaceholder.typicode.com/posts/1'); 
  
  const listaMetodos = Object.values(metodosMCDM);

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.mainTitle}>Decisão Multicritério em Foco 📊</h1>
        <p className={styles.mainSubtitle}>
          Artigos avançados, modelos conceituais e aplicações práticas de métodos MCDM/MCDA para análise de risco e resiliência.
        </p>
      </header>

      <ul className={styles.lista}>
        {listaMetodos.map((metodo) => (
          <li key={metodo.id} className={styles.card}>
            <span className={styles.meta}>Método {metodo.sigla} • Pesquisa Acadêmica</span>
            <h2 className={styles.postTitle}>
              <Link href={`/artigos/${metodo.id}`}>{metodo.titulo}</Link>
            </h2>
            <p className={styles.resumo}>{metodo.resumo}</p>
            
            {/* 🟢 Novo Botão Saiba Mais */}
            <div className={styles.buttonWrapper}>
              <Link href={`/artigos/${metodo.id}`} className={styles.btnSaibaMais}>
                Saiba Mais →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}