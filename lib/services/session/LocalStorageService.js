export const setLocalStorage = (res, currentToken = null) => {
  const user = res.data;
  const token = res.headers.authorization || currentToken;
  localStorage.setItem("session", setSessionItem(user, token));
};

export function refreshSession(dispatch) {
  const sessionInfo = localStorage.getItem("session") || null;

  if (sessionInfo) {
    dispatch({
      type: "LOGIN",
      payload: {
        sessionInfo: sessionInfo,
      },
    });
  }
}

export const clearLocalStorage = () => localStorage.clear();

export function setSessionItem(userData, bearerToken) {
  const { uuid, avatar, names, surnames } = userData;
  const sessionItem = {
    id: uuid,
    authorization: bearerToken,
    avatar: avatar,
    names: names,
    surnames: surnames,
  };
  return JSON.stringify(sessionItem);
}
