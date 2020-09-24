import axios from "axios";
import { setHeaders, setUserParams } from "../lib/helpers/requestFormatter";

export default class SessionsController {
  static login(user) {
    return axios.post(`/login`, setUserParams(user));
  }

  static logout(token) {
    return axios.delete(`/logout`, setHeaders(token));
  }
}
