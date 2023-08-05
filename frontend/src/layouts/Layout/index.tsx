import type { FC, ReactNode } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';

interface IProps {
  pageTitle: string;
  children: ReactNode;
}

export const Layout: FC<IProps> = ({ children, pageTitle }) => {

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Header pageTitle={pageTitle}/>
      <div className='sc-wrap'>
        <Sidebar/>
        {children}
      </div>

      <Footer/>
      <style jsx>{`
        .sc-wrap {
          display: flex;
        }
      `}</style>
    </>
  );
}