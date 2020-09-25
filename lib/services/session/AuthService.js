import SessionsController from "../../../controllers/SessionsController";
import { setBearerToken, clearLocalStorage } from "./LocalStorageService.js";

export const LoginService = (data, login) =>
  SessionsController.login(data)
    .then((res) => {
      if (res.status === 200) {
        setBearerToken(res);
        login(res.data, res.headers.authorization);
        return res;
      }
    })
    .catch((err) => err.response);

export const logoutHandler = (token, dispatch) => {
  SessionsController.logout(token).then((res) => {
    if (res.status === 200) {
      clearLocalStorage();
      dispatch({
        type: "LOGOUT",
      });
    }
  });
};
