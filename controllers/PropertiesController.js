import axios from "axios";
import { setHeaders, setPropertyParams } from "../lib/helpers/requestFormatter";

export default class PropertiesController {
  static create(property) {
    return axios.post(
      "/properties",
      setPropertyParams(property),
      setHeaders(null, {
        "Content-Type": "multipart/form-data",
      })
    );
  }

  static update(propertyId, property) {
    return axios.patch(
      `/properties/${propertyId}`,
      setPropertyParams(property),
      setHeaders()
    );
  }

  static delete(propertyId) {
    return axios.delete(`/properties/${propertyId}`, setHeaders());
  }
}
