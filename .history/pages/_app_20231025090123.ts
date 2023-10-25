import type { AppProps } from 'next/app'
import { Component } from 'react'
import Head from 'next/head';
 
export default function MyApp({ pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>yTavs</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}