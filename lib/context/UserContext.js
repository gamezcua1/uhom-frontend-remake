import React, { useState } from "react";

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
    console.log(user);
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
