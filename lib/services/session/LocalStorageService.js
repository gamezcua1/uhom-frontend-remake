import cookieCutter from "cookie-cutter";

export const setBearerToken = (res, currentToken = null) => {
  const token = bearerToken(res) || currentToken;
  cookieCutter.set("uid", token);
};

export const getBearerTokenFromCookie = () =>
  `Bearer ${cookieCutter.get("uid")}`;

export const clearLocalStorage = () =>
  cookieCutter.set("uid", null, { expires: new Date(0) });

const bearerToken = (res) => res.headers.authorization.split(" ")[1];
