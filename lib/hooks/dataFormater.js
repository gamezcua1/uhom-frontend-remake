import { useEffect, useState } from "react";

export function cleanEmpties(baseObject) {
  const object = { ...baseObject };
  for (let key in object) {
    const currentValue = object[key];
    if (!currentValue || currentValue.length === 0) delete object[key];
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

export function usePaginationHeaders(headers) {
  const [itemsPerPage, setItemsPerPage] = useState(headers["per-page"] || 0);
  const [totalItems, setTotalItems] = useState(headers["total"] || 0);

  useEffect(() => {
    setItemsPerPage(headers["per-page"]);
    setTotalItems(headers["total"]);
  }, [headers]);

  return [itemsPerPage, totalItems];
}

export function useCurrentTab(queryTab) {
  const validKeyTabs = ["my-likes", "info"];
  const [currentIndex, setCurrentIndex] = useState(null);

  const tmpIndex = validKeyTabs.indexOf(queryTab);

  useEffect(() => {
    if (tmpIndex !== -1) setCurrentIndex(tmpIndex);
    else setCurrentIndex(0);
  }, [queryTab]);

  return { currentIndex, setCurrentIndex, validTabs: validKeyTabs };
}
