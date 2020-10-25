import Head from 'next/head';
import Header from '../components/Header';
import Results from '../components/Results';
import Search from '../components/Search';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>10x Genomics Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <div className={styles.pageTitle}>Publications</div>
        </div>

        <Search />
        <Results dataSource='query_data.json'/>
      </main>

    </div>
  )
};
