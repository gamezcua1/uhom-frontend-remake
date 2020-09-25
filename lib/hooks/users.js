import useSWR from "swr";
import fetcher from "../axios";

export const useUserInfo = (userId, headers) => {
  const { data: response = {}, error } = useSWR(`/users/${userId}`, (url) =>
    fetcher(url, null, { Authorization: headers })
  );
  const { data: user } = response;
  return { user, error };
};
