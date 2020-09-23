import useSWR from "swr";
import fetcher from "../axios";

export const usePropertiesIndex = (params) => {
  const { data: response, error, mutate } = useSWR(
    () => `/properties?page=${params.page}`,
    (url) => fetcher(url, params)
  );
  const { headers = {}, data: properties } = response || {};
  const itemsPerPage = headers["per-page"] || 0;
  const totalItems = headers["total"] || 0;

  return { properties, itemsPerPage, totalItems, error, mutate };
};

export const usePropertyShow = (url, params) => {
  const { data: response, error } = useSWR(url, (url) => fetcher(url, params));
  const { data: property } = response || {};

  return { property, error, response };
};
