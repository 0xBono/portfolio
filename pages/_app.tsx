import type { AppProps } from 'next/app';
import { Fragment } from 'react';
import Head from 'next/head';
import 'styles/core.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Halo, EVERYONE</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta property="og:title" content="Halo, EVERYONE" key="page_title" />
        <meta
          property="og:description"
          content="반가워요! 2년차 프론트엔드 개발자가 만든 작은 서랍이에요!"
          key="page_desc"
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/59228569/121422316-15a9b980-c9aa-11eb-9c6b-249e58a3b88b.png"
          key="page_image"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
export default MyApp;
