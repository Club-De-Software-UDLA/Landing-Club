import { NextUIProvider } from '@nextui-org/react';
import { AppProps } from 'next/app';
import { SSRProvider } from 'react-bootstrap';
import download from '../public/download.png'

function MyApp({ Component, pageProps }:AppProps) {
  return (
    // 2. Use at the root of your app
    <SSRProvider> 
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
    </SSRProvider>
  );
}

export default MyApp;