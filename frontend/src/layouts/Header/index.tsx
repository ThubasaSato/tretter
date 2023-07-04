import type { FC } from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

interface IProps {
  pageTitle: string;
}

export const Header: FC<IProps> = ({ pageTitle }) => (
  <>
    <header className="ea-header">
      <div className="ea-logo-box">
        <h1 className="ea-logo">
          tretter
        </h1>
      </div>

      <div className="ea-page-ttl-wrap">
        <div className="ea-page-ttl-box">
          <h2 className="ea-page-ttl">{pageTitle}</h2>
        </div>
      </div>

      <Link href="/">
        Home
      </Link>

    </header>
    <style jsx>{`
      header {
        display: flex;
        margin: 0;
      }
      .ea-logo-box {
        margin: 0 30px;
      }
      h1, h2 {
        padding: 0;
        margin: 0;
      }
    `}</style>
  </>
);