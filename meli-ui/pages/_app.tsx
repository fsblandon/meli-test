import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mercado Libre</title>
        <meta 
          name='viewport'
          content='width=device-with, initial-scale=1.0, maximun-scale=1.4'/>
        <meta 
          name='description'
          content='La tienda mas grande de Latam'/>
        <link
          rel="canonical"
          href="https://www.mercadolibre.com.co" />
      </Head>
      <Component {...pageProps} />
    </>
  );
  
}

export default MyApp
