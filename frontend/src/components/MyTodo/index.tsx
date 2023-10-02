import type { FC } from "react";
import { postTretterTickets } from "src/api/tretterTickets/postTretterTickets";
// import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

export const MyTodo: FC = () => {
  const postTodo = async (e: any) => {
    e.preventDefault();
    await postTretterTickets();
  };

  return (
    <>
      <div className="ea-main-contents">
        <h1>todoを作成する</h1>
      </div>
      <form onSubmit={postTodo}>
        <label>
          <input type="text" />
        </label>
        <button type="submit">ボタン</button>
      </form>
    </>
  );
};