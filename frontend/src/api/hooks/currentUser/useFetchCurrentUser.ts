// import type { CurrentUserResp } from "src/api/schemas/user";

// import { useEffect, useState } from "react";
// import { useFetcher } from "src/api/hooks/useFetcher";
// import { useAppDispatch } from "src/store/hooks";
// import { currentUserRespSchema } from "src/api/schemas/user";

// export const useFetchCurrentUser = () => {
//   const { data, error, mutate, inProgress, skipped } = useFetcher<undefined,CurrentUserResp>({
//     req: { path: "/current_user" },
//     resp: {
//       expectedStatus: 200,
//       bodyValidator: (respBody) => currentUserRespSchema.parse(respBody),
//     },
//     // callbacks: {
//     //   beforeReq: () => {
//     //     // startLoadings();
//     //   },
//     //   afterReq: () => {
//     //     // stopLoadings();
//     //   },
//     // },
//     methodName: useFetchCurrentUser.name,
//   });

//   const [currentUser, setCurrentUser] = useState<CurrentUserResp>();

//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     if (inProgress || skipped) return;

//     if (data?.isSuccess && !error) {
//       // 取得に成功したらcurrentUserをstoreにセット
//       // dispatch(setCurrentUserAttrs(data.responseData.data.attributes));
//       // dispatch(setLoginLabels(DEFAULT_LOGIN_LABELS));
//       console.log("成功");
//       console.log("currentUser", currentUser);
//       setCurrentUser(data.responseData);
//     } else {
//       // 取得に失敗したら、currentUserをクリアして、再認証用のログインフォーム表示準備
//       // dispatch(resetCurrentUser());
//       // dispatch(setLoginLabels(LOGIN_LABELS_RE_LOGIN));
//       console.log("失敗");
//       console.log("currentUser", currentUser);
//       setCurrentUser(undefined);
//     }
//   }, [inProgress, skipped, data, error, dispatch]);

//   return { currentUser, error, mutate };
// };

import useSWR from 'swr';

import { fetchCurrentUser } from '../../currentUser';

import type { ApiError, IHandleApiResponseRet } from '../../axiosHandlers';
import type { UserResp } from '../../schemas/user';

export const useFetchCurrentUser = () => {
  const { path, fetcher } = fetchCurrentUser;

  const { data, error, mutate } = useSWR<IHandleApiResponseRet<UserResp>, ApiError>(path, fetcher, {
    onErrorRetry: (error, _key, _config, _revalidate, { retryCount }) => {
      if (error.status === 401) return;

      if (retryCount > 5) return;
    },
  });

  return { data, error, mutate };
};
