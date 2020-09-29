import axios from "axios";
import { setHeaders } from "../lib/helpers/requestFormatter";

export default class LikesController {
  static post(propertyId) {
    return axios.post(
      `/properties/${propertyId}/like`,
      setParams(propertyId),
      setHeaders()
    );
  }

  static delete(propertyId) {
    return axios.delete(`/properties/${propertyId}/like`, {
      ...setParams(propertyId),
      ...setHeaders(),
    });
  }
}

const setParams = (propertyId) => ({
  property_id: propertyId,
});
