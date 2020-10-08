import { getBearerTokenFromCookie } from "../services/session/LocalStorageService";

export const setHeaders = (bearerToken, extraHeaders) => ({
  headers: {
    Authorization: bearerToken || getBearerTokenFromCookie(),
    ...extraHeaders,
  },
});

export const setUserParams = (user) => {
  const formData = new FormData();
  const userObject = { ...user };

  for (let key in userObject) {
    formData.append(
      `user[${key}]`,
      key === "avatar" ? userObject[key][0] : userObject[key]
    );
  }

  return formData;
};
