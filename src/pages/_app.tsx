import '@picocss/pico'

import '../style/Home.module.css';

import type { AppProps } from 'next/app'
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Analytics />
      <Footer />
    </>
  )
}
