export const toNumberFormat = (value, setValue) => {
  const numberRegexp = /[^0-9.,]/g;
  setValue(value.replace(numberRegexp, ""));
};
