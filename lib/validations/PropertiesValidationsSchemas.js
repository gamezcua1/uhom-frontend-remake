import * as Yup from "yup";
import {
  REQUIRED_MESSAGE,
  yupRequiredString as requiredField,
} from "./ValidationsSchemas";

const requiredImagesField = Yup.mixed().required(REQUIRED_MESSAGE);

export const newPropertyValidations = Yup.object().shape({
  address: requiredField,
  bathrooms: requiredField,
  bedrooms: requiredField,
  images: requiredImagesField,
  price: requiredField,
  construction_area: requiredField,
  front_meters: requiredField,
  deep_meters: requiredField,
});
