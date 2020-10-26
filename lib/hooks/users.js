import axios from "axios";
import useSWR from "swr";
import fetcher from "../axios";
import { defaults } from "../defaults";
import { setHeaders } from "../helpers/requestFormatter";
import { usePaginationHeaders } from "./dataFormater";

export const USER_ROLES = {
  admin: "Administrador",
  real_estate_agent: "Agente de bienes raíces",
  user: "Cliente",
};

export const useUserIndex = (route, headers) => {
  const { data: response = {}, error } = useSWR(
    () => headers && route,
    (url) => fetcher(url, null, { Authorization: headers })
  );

  const { data: users } = response;
  return { users, error };
};

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

export const useUserAvatar = (currentUser) =>
  currentUser && currentUser.avatar
    ? `${axios.defaults.baseURL}${currentUser.avatar}`
    : defaults.avatar;
