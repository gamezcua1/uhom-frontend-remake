import { getBearerTokenFromCookie } from "../services/session/LocalStorageService";

export const setHeaders = (bearerToken, extraHeaders) => ({
  headers: {
    Authorization: bearerToken || getBearerTokenFromCookie(),
    ...extraHeaders,
  },
});

export const setUserParams = (user) => ({
  user: { ...user },
});
