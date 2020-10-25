import axios from "axios";
import { setHeaders } from "../lib/helpers/requestFormatter";

export default class ImagesController {
  static delete(propertyId, imageId) {
    return axios.delete(
      `/properties/${propertyId}/images/${imageId}`,
      setHeaders()
    );
  }
}
