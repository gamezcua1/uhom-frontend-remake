import useSWR from "swr";
import fetcher from "../axios";
import { setHeaders } from "../helpers/requestFormatter";
import { usePaginationHeaders } from "./dataFormater";

export const useUserInfo = (userId, headers) => {
  const { data: response = {}, error } = useSWR(`/users/${userId}`, (url) =>
    fetcher(url, null, { Authorization: headers })
  );
  const { data: user } = response;
  return { user, error };
};

export const useUserLikes = (userId, params) => {
  const { data: response = {}, error } = useSWR(
    () => `/users/${userId}/likes?page=${params.page}`,
    (url) => fetcher(url, params, setHeaders()),
    {
      revalidateOnMount: true,
    }
  );

  const { headers = {}, data: properties } = response;
  const [itemsPerPage, totalItems] = usePaginationHeaders(headers);

  return { properties, itemsPerPage, totalItems, error, response };
};
