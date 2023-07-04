import type { FC } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Dashboard: FC = () => {
  const router = useRouter();
  return (
    <>
      <div className="ea-main-contents">
        <h1>ダッシュボード（仮）</h1>

      </div>
      <Link href='/mytodo'>
        create todo
      </Link>
    </>
  );
}