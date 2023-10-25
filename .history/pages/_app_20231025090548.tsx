import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>yTavs - Frontend Dev</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
