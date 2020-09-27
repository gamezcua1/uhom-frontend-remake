import useSWR from "swr";
import fetcher from "../axios";

export const usePropertiesIndex = (params) => {
  console.log("Hook");
  console.log(params);
  const { data: response, error } = useSWR(
    () => `/properties?page=${params.page}`,
    (url) => fetcher(url, params)
  );
  const { headers = {}, data: properties } = response || {};
  const itemsPerPage = headers["per-page"] || 0;
  const totalItems = headers["total"] || 0;

  return { properties, itemsPerPage, totalItems, error };
};

export const usePropertyShow = (params) => {
  const { data: response, error } = useSWR(
    () => `/properties/${params.propertyId}`,
    (url) => fetcher(url, params)
  );
  const { data: property } = response || {};

  return { property, error, response };
};
