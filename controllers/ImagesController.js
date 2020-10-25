import axios from "axios";
import { setHeaders, setPropertyParams } from "../lib/helpers/requestFormatter";

export default class ImagesController {
  static attach(propertyId, images) {
    return axios.post(
      `/properties/${propertyId}/images`,
      setPropertyParams(images),
      setHeaders(null, {
        "Content-Type": "multipart/form-data",
      })
    );
  }

  static delete(propertyId, imageId) {
    return axios.delete(
      `/properties/${propertyId}/images/${imageId}`,
      setHeaders()
    );
  }
}
