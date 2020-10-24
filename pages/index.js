import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>10x Genomics Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
};
