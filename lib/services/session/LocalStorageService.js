import cookieCutter from "cookie-cutter";

export const setBearerToken = (res, currentToken = null) => {
  const token = res.headers.authorization || currentToken;
  cookieCutter.set("uid", token);
};

export function refreshSession(dispatch) {
  const sessionInfo = cookieCutter.get("uid") || null;

  if (sessionInfo) {
    dispatch({
      type: "LOGIN",
      payload: {
        sessionInfo: sessionInfo,
      },
    });
  }
}

export const clearLocalStorage = () => cookieCutter.set("uid");
