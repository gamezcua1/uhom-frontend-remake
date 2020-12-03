import React, { useState, useEffect } from "react";
import { getBearerTokenFromCookie } from "../services/session/LocalStorageService";
import { CurrentUserService } from "../services/session/AuthService";

const initialUser = {
  user: {
    token: "",
    currentUser: null,
  },
  login: () => {},
  logout: () => {},
  isLoggedIn: () => {},
  token: "",
  currentUser: null,
};

export const UserContext = React.createContext(initialUser);

export const useCurrentUser = () => {
  const [user, setUser] = useState(initialUser.user);
  const { currentUser, token } = user;

  const login = (user, token) => {
    setUser({ currentUser: user, token });
  };

  const logout = () => {
    setUser(initialUser.user);
  };

  const isLoggedIn = () => !!token;
  const isAdmin = () => currentUser !== null && currentUser.role === "admin";
  const isUser = () => currentUser === null || currentUser.role === "user";

  return { currentUser, token, login, logout, isLoggedIn, isAdmin, isUser };
};

export const UserContextProvider = ({ children }) => {
  const initialState = useCurrentUser();

  useEffect(() => {
    CurrentUserService(getBearerTokenFromCookie(), initialState.login);
  }, []);

  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
};
