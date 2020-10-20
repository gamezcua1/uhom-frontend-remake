import { getBearerTokenFromCookie } from "../services/session/LocalStorageService";

export const setHeaders = (bearerToken, extraHeaders) => ({
  headers: {
    Authorization: bearerToken || getBearerTokenFromCookie(),
    ...extraHeaders,
  },
});

export const setPropertyParams = (property) => {
  const form = new FormData();
  const propertyObject = { ...property };

  for (let key in propertyObject) {
    const field = propertyObject[key];
    key === "images"
      ? attachImages(field, form)
      : form.append(`property[${key}]`, field);
  }

  return form;
};

const attachImages = (images, currentForm) => {
  for (let i = 0; i < images.length; i++) {
    currentForm.append(`property[images][]`, images[i]);
  }
};

export const setUserParams = (user) => {
  const formData = new FormData();
  const userObject = { ...user };

  for (let key in userObject) {
    formData.append(
      `user[${key}]`,
      key === "avatar" ? userObject[key][0] : userObject[key]
    );
  }

  return formData;
};
