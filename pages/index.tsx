import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Androit</title>
        <meta name="description" content="Impact through code learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello Androit</h1>
    </div>
  );
}
