import type { AppProps } from 'next/app';
import Head from 'next/head';
// import { Provider as ReduxProvider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps){
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=1024" />
        <title>tretter</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      {/*<ReduxProvider store={store}>
        <LayoutPublic>*/}
          <Component {...pageProps} />
        {/*</LayoutPublic>
      </ReduxProvider>*/}
    </>
  );
}

export default MyApp;