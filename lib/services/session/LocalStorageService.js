import Cookies from "js-cookie";

export const setBearerToken = (res, currentToken = null) => {
  const token = bearerToken(res) || currentToken;
  Cookies.set("uid", token, { expires: 365 });
};

export const getBearerTokenFromCookie = () => `Bearer ${Cookies.get("uid")}`;

export const clearLocalStorage = () => Cookies.remove("uid");

const bearerToken = (res) => res.headers.authorization.split(" ")[1];
