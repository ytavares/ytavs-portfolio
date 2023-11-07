/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/react-in-jsx-scope */
import { GlobalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Theme from '@/styles/Theme';
import { ThemeProvider } from 'styled-components';
import Script from 'next/script';
import { Container, Header } from '@/components';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>yTavs</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Script src="animation.js" />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
