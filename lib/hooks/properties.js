import useSWR from "swr";
import fetcher from "../axios";
import { usePaginationHeaders } from "./dataFormater";

export const usePropertiesIndex = (params) => {
  const { data: response, error } = useSWR(
    () => `/properties?page=${params.page}`,
    (url) => fetcher(url, params)
  );
  const { headers = {}, data: properties } = response || {};
  const [itemsPerPage, totalItems] = usePaginationHeaders(headers);

  return { properties, itemsPerPage, totalItems, error, response };
};

export const usePropertyShow = (params) => {
  const { data: response, error } = useSWR(
    () => `/properties/${params.propertyId}`,
    (url) => fetcher(url, params)
  );
  const { data: property } = response || {};

  return { property, error, response };
};
