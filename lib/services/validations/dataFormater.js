export default function cleanEmpties(object) {
  for (let key in object) {
    const currentValue = object[key];
    if (isEmpty(currentValue)) delete object[key];
  }

  return object;
}

const isEmpty = (value) =>
  value === undefined || value === null || value === "";
