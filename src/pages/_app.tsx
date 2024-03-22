import type { AppProps } from 'next/app';
import Script from 'next/script';
import '../app/globals.css';
import Layout from '../app/layout';
import 'react-tooltip/dist/react-tooltip.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      console.log('Access Token:', accessToken);
    } else {
      //로그아웃
      console.log('Access Token not found');
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive" //"beforeInteractive"으로 찾았는데 경고메세지때문에 바꿈
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
