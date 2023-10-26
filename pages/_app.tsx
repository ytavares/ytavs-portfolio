/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/react-in-jsx-scope */
import { GlobalStyles } from '@/styles/global';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Theme from '@/styles/Theme';
import { ThemeProvider } from 'styled-components';
import { Container } from '@/components';

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <GlobalStyles />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
