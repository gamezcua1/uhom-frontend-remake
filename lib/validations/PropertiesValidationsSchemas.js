import * as Yup from "yup";
import {
  REQUIRED_MESSAGE,
  yupRequiredString as requiredField,
} from "./ValidationsSchemas";

const IMAGE_VALIDATION_MESSAGE = "⚠ Formato de imagen no válido";
const imageFormat = RegExp(/^image\//);

const requiredImagesField = Yup.array()
  .transform((value) => (value === null ? undefined : value))
  .required(REQUIRED_MESSAGE)
  .test("imageFormat", IMAGE_VALIDATION_MESSAGE, (value) =>
    imageFormat.test(value)
  );
const requiredNumberField = Yup.number()
  .transform((value) => (isNaN(value) ? undefined : value))
  .required(REQUIRED_MESSAGE)
  .positive("⚠ La cantidad debe de ser positiva");

export const newPropertyValidations = Yup.object().shape({
  address: requiredField,
  bathrooms: requiredNumberField,
  bedrooms: requiredNumberField,
  images: requiredImagesField,
  price: requiredNumberField,
  construction_area: requiredNumberField,
  front_meters: requiredNumberField,
  deep_meters: requiredNumberField,
});
