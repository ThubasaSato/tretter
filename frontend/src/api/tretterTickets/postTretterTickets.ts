import { useState, useEffect } from "react";
import {
  ApiError,
  handleApiError,
  handleApiResponse,
  httpClient,
  IHandleApiResponseRet,
} from "../axiosHandlers";
import { POST_TICKET_PATH } from "./path";

type Resp = "";

export const postTretterTickets = async () => {
  try {
    const response = await httpClient.post(POST_TICKET_PATH);
    return handleApiResponse<Resp>({ response, expectedStatus: 204 });
  } catch (error: unknown) {
    return handleApiError({ error, methodName: postTretterTickets.name });
  }
};
