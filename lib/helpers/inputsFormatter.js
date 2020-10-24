export const toNumberFormat = (value, setValue) => {
  const newValue = parseValue(value);
  setValue(newValue);
};

export const parseValue = (value) => {
  const numberRegexp = new RegExp(/[^0-9\.]/g); //eslint-disable-line
  let tmpValue = value.replace(numberRegexp, "");
  if (tmpValue === "") return tmpValue;

  if (/\./.test(tmpValue)) return setWithDecimals(tmpValue);
  return setIntegers(tmpValue);
};

const setIntegers = (integers) => {
  if (integers.charAt(0) === "0" && integers.length > 1)
    integers = integers.substr(1);
  return parseInt(integers, 10).toLocaleString("en");
};

const setWithDecimals = (value) => {
  let [integers, ...decimals] = value.split(".");
  integers = integers ? setIntegers(integers) : 0;
  decimals = decimals.join("").slice(0, 4);
  return `${integers}.${decimals}`;
};
