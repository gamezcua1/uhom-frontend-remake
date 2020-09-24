import axios from "axios";
import { setHeaders } from "../lib/helpers/requestFormatter";

export default class LikesController {
  static post(authorization, propertyId, userId) {
    return axios.post(
      `/properties/${propertyId}/like`,
      setParams(propertyId, userId),
      setHeaders(authorization)
    );
  }
}

const setParams = (propertyId, userId) => ({
  user_id: userId,
  property_id: propertyId,
});
