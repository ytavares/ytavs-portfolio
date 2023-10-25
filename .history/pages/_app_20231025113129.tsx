/* eslint-disable react/react-in-jsx-scope */
import { GlobalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Theme from '@/styles/Theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>yTavs</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
