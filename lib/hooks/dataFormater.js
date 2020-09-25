import { useEffect, useState } from "react";

export function cleanEmpties(baseObject) {
  const object = {...baseObject}
  for (let key in object) {
    const currentValue = object[key];
    if (!currentValue) delete object[key];
  }

  return object;
}

export function useCRLF(currentValue, defaultValue) {
  const [newValue, setValue] = useState(currentValue);
  useEffect(() => {
    setValue(currentValue);
  }, [currentValue]);

  return !newValue ? [defaultValue] : newValue.split("\n");
}
