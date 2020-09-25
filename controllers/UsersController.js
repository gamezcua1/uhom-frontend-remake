import axios from "axios";
import { setHeaders, setUserParams } from "../lib/helpers/requestFormatter";

export default class UsersController {
  static update(uuid, user, token) {
    return axios.patch(
      `/users/${uuid}`,
      setUserParams(user),
      setHeaders(token)
    );
  }
}
