import * as Yup from "yup";

const REQUIRED_MESSAGE = "⚠ Este campo es obligatorio";
const PASSWORD_MIN_MESSAGE = "⚠ Contraseña mínimo de 8 caracteres";
const PASSWORD_FORMAT_MESSAGE =
  "⚠ La contraseña debe incluir mayúsculas, minúsculas y números";
const PASSWORD_MATCHER_MESSAGE = "⚠ La contraseña debe de coincidir";
const EMAIL_FORMAT_MESSAGE = "⚠ Ingrese un email válido";
const PHONE_FORMAT_MAESSAGE =
  "⚠ El número de télefono debe de seguir el siguiente formato: 555-555-5555";

const yupRequiredString = Yup.string().required(REQUIRED_MESSAGE);
const yupNotRequiredString = Yup.string().notRequired();

const yupRequiredEmail = yupRequiredString.email(EMAIL_FORMAT_MESSAGE);
const yupRequiredPassword = yupRequiredString.min(8, PASSWORD_MIN_MESSAGE);

const PASSWORD_FORMAT = /(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
const PHONE_FORMAT = /(\d{10}|\(?\d{3}\)?[-. ]\d{3}[-.]\d{4})/;

export const signupValidations = Yup.object().shape({
  names: yupRequiredString,
  surnames: yupRequiredString,
  email: yupRequiredEmail,
  password: yupRequiredPassword.matches(
    PASSWORD_FORMAT,
    PASSWORD_FORMAT_MESSAGE
  ),
  password_confirmation: yupRequiredPassword.oneOf(
    [Yup.ref("password")],
    PASSWORD_MATCHER_MESSAGE
  ),
  phone_number: yupRequiredString.matches(PHONE_FORMAT, PHONE_FORMAT_MAESSAGE),
});

const options = (message) => ({
  message: message,
  excludeEmptyString: true,
});

export const notRequiredValidations = Yup.object().shape({
  email: yupNotRequiredString.email(EMAIL_FORMAT_MESSAGE),
  password: yupNotRequiredString.matches(
    PASSWORD_FORMAT,
    options(PASSWORD_FORMAT_MESSAGE)
  ),
  password_confirmation: yupNotRequiredString
    .matches(PASSWORD_FORMAT, options(PASSWORD_FORMAT_MESSAGE))
    .oneOf([Yup.ref("password")], PASSWORD_MATCHER_MESSAGE),
  phone_number: yupNotRequiredString.matches(
    PHONE_FORMAT,
    options(PHONE_FORMAT_MAESSAGE)
  ),
});

export const loginValidations = Yup.object().shape({
  email: yupRequiredString,
  password: yupRequiredString,
});

export const validationsAfterSubmit = (errors) => {
  const response = Object.keys(errors).map((key) => ({
    type: "serverResponse",
    name: key,
    message: `⚠ ${errors[`${key}`]}`,
  }));

  return response;
};
