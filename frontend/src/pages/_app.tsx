import type { AppProps } from "next/app";
import Head from "next/head";
// import { Provider as ReduxProvider } from 'react-redux';
import { LayoutPublic } from "src/layouts/Layout/Public";
import { StrictMode } from "react";

import "src/styles/css/reset.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=1024" />
        <title>tretter</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/*<ReduxProvider store={store}>
        <LayoutPublic>*/}
      <StrictMode>
        <LayoutPublic>
          <Component {...pageProps} />
        </LayoutPublic>
      </StrictMode>
      {/*</LayoutPublic>
      </ReduxProvider>*/}
    </>
  );
}

export default MyApp;
