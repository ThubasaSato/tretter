import Link from 'next/link';
import { FC } from 'react';
export const MainButton = () => {
  return (
    <>
      <div className='main-button'>
        <Link href='/mytodo'>
          <span>
            つぶやく
          </span>
        </Link>
        <Link href='/mytodo'>
          <span>
            チケット作成
          </span>
        </Link>
        <Link href='/mytodo'>
          <span>
            みんなのつぶやきを見る
          </span>
        </Link>
      </div>
      <style jsx>{`
      .main-button {
        width: 100%;
      }
      span {
        margin-right: 10px;
      }
      `}</style>
    </>
  );
};