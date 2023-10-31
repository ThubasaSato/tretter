import { httpClient, handleApiError, handleApiResponse } from './axiosHandlers';
import { userRespSchema } from './schemas/user';

import type { IHandleApiResponseRet } from './axiosHandlers';
import type { UserResp } from './schemas/user';

const PATH = '/current_user';

const currentUserFetcher = async (url: typeof PATH): Promise<IHandleApiResponseRet<UserResp>> => {
  try {
    const response = await httpClient.get<UserResp>(url);
    return handleApiResponse({
      response,
      expectedStatus: 200,
      dataValidator: userRespSchema.parse,
    });
  } catch (error: unknown) {
    throw handleApiError({ error, methodName: `${currentUserFetcher.name}` });
  }
};

export const fetchCurrentUser: {
  path: typeof PATH;
  fetcher: typeof currentUserFetcher;
} = {
  path: PATH,
  fetcher: currentUserFetcher,
};
