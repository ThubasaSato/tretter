import type { FC } from "react";
import Link from "next/link";
import { NextPage } from "next";
import { useRouter } from "next/router";

interface IProps {
  pageTitle: string;
}

export const Header: FC<IProps> = ({ pageTitle }) => (
  <>
    <header className="ea-header">
      <div className="ea-logo-box">
        <h1 className="ea-logo">tretter</h1>
      </div>

      <div className="ea-page-ttl-wrap">
        <div className="ea-page-ttl-box">
          <h2 className="ea-page-ttl">{pageTitle}</h2>
        </div>
      </div>

      <div className="header-buttons">
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="/">
          <span>プロフィール</span>
        </Link>
        <Link href="/">
          <span>設定</span>
        </Link>
        <Link href="/">
          <span>ログアウト</span>
        </Link>
      </div>
    </header>
    <style jsx>{`
      header {
        display: flex;
        margin: 0;
      }
      .ea-logo-box {
        margin: 0 30px;
      }
      .header-buttons {
      }
      .ea-header {
        border: solid 1px gray;
        border-radius: 4px;
        margin-bottom: 20px;
      }
      .header-buttons span {
        margin-left: 10px;
      }
      h1,
      h2 {
        padding: 0;
        margin: 0;
      }
    `}</style>
  </>
);
