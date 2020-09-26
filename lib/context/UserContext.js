import React, { useState, useEffect } from "react";
import { getBearerTokenFromCookie } from "../services/session/LocalStorageService";
import { CurrentUserService } from "../services/session/AuthService";

const initialUser = {
  token: "",
  currentUser: {},
  login: () => {},
  logout: () => {},
  isLoggedIn: () => {},
};

export const UserContext = React.createContext(initialUser);

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState("");

  const login = (user, token) => {
    setCurrentUser(user);
    setToken(token);
  };

  const logout = () => {
    setToken("");
    setCurrentUser({});
  };

  const isLoggedIn = () => !!token;

  return { currentUser, token, login, logout, isLoggedIn };
};

export function UserContextProvider({ children }) {
  const initialState = useCurrentUser();

  useEffect(() => {
    CurrentUserService(getBearerTokenFromCookie(), initialState.login);
  }, []);

  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
}

export function useUserContext() {
  const context = React.useContext(UserContext);
  if (context === undefined)
    throw new Error("useUserContext debe de usarse con UserContextProvider");

  return context;
}
