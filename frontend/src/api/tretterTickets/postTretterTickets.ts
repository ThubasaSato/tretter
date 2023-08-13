import { useState, useEffect } from 'react';
import { ApiError, handleApiError, handleApiResponse, httpClient, IHandleApiResponseRet } from '../axiosHandlers';
import { POST_TICKET_PATH } from './path';

type Resp = '';

type Ret = IHandleApiResponseRet<Resp> | ApiError;

export const postTretterTickets = async () => {
  await httpClient.post(POST_TICKET_PATH);
};