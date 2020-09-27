import useSWR from "swr";
import fetcher from "../axios";

export const useUserLikesIndex = (params) => {
  const { data, error } = useSWR(
    () => `/users/${params.user_id}/likes?page=${params.page}`,
    (url) => fetcher(url, params)
  );

  return { data, error };
};
