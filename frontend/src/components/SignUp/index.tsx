import type { FC, SetStateAction, FocusEventHandler } from "react";
import type { UserNewFormSchema } from "./schema";
import { execAsyncFuncWithVoidReturn } from "src/util/execAsyncFuncWithVoidReturn";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userEditFormSchema as schema } from "./schema";
import { postUsers } from "src/api/users";

export const SignUp: FC = () => {
  const { register, handleSubmit, formState } = useForm<UserNewFormSchema>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  });

  const { isDirty, isValid, errors } = formState;

  /** メンバー新規作成リクエスト */
  const createUserRequest = async (data: UserNewFormSchema) => {
    const res = await postUsers(data);
    if (res.isSuccess) {
      console.log("registration is success!");
    } else {
      console.log("registration is failed");
    }
  };

  const handleClick = async (data: UserNewFormSchema) => {
    if (!isDirty || !isValid) {
      return
    };
    await createUserRequest(data);
  };

  const onSubmit: FocusEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await execAsyncFuncWithVoidReturn(handleSubmit(handleClick));
    console.log("onSubmit");
  };

  return (
    <>
      <h1>ユーザー登録</h1>
      <form onSubmit={onSubmit}>
        <input
          type="name"
          placeholder="your name"
          autoComplete="name"
          {...register("name")}
        />
        <input
          type="email"
          placeholder="例：test@example.com"
          autoComplete="email"
          {...register("email")}
        />
        <input
          type="password"
          autoComplete="password"
          placeholder="password"
          {...register("password")}
        />
        <input type="submit" />
      </form>
    </>
  );
};
