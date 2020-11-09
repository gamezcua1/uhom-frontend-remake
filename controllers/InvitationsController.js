import axios from "axios";
import { setHeaders, setUserParams } from "../lib/helpers/requestFormatter";

export default class InvitationsController {
  static inviteCollaborator(user) {
    return axios.post(
      "/users/invitation",
      setUserParams(user),
      setHeaders(null, {
        "Content-Type": "multipart/form-data",
      })
    );
  }

  static getInvitedUser(token) {
    return axios.get(
      `/users/invitation/accept?user[invitation_token]=${token}`
    );
  }

  static update(user) {
    return axios.patch(
      "/users/invitation",
      setUserParams(user),
      setHeaders(null, {
        "Content-Type": "multipart/form-data",
      })
    );
  }
}
