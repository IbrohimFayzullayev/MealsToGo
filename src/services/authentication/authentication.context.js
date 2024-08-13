import React, { useEffect, useState, createContext } from "react";
import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
        setIsAuthenticated(true);
      })
      .catch((e) => {
        setError(e);
        setIsLoading(false);
      });
  };

  useEffect(() => {}, []);

  return (
    <AuthenticationContext.Provider
      value={{ isLoading, user, error, onLogin, isAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
