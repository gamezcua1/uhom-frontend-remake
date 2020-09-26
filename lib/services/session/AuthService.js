import SessionsController from "../../../controllers/SessionsController";
import { setBearerToken, clearLocalStorage } from "./LocalStorageService.js";

export const CurrentUserService = (token, login) => {
  SessionsController.me(token)
    .then((res) => {
      if (res.status == 200) login(res.data, token);
    })
    .catch((err) => err.response);
};

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

export const LogoutService = (token, logout) => {
  SessionsController.logout(token).then((res) => {
    if (res.status === 200) {
      clearLocalStorage();
      logout();
    }
  });
};
