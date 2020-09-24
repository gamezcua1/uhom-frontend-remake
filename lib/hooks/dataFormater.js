import { useEffect, useState } from "react";

export function cleanEmpties(object) {
  for (let key in object) {
    const currentValue = object[key];
    if (isEmpty(currentValue)) delete object[key];
  }

  return object;
}

export function useCRLF(currentValue, defaultValue) {
  const [newValue, setValue] = useState(currentValue);
  useEffect(() => {
    setValue(currentValue);
  }, [currentValue]);

  return isEmpty(newValue) ? [defaultValue] : newValue.split("\n");
}

const isEmpty = (value) =>
  value === undefined || value === null || value === "";
