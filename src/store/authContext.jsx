import { createContext, useContext, useState } from "react";

// 1. Create Context
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState("");

  function login(username, password) {
    if (username === "Alexey" && password === "dummy") {
      setUsername(username);
      setIsAuth(true);
      return true;
    } else {
      setIsAuth(false);
      return false;
    }
  }

  function logout() {
    setIsAuth(false);
  }

  const value = { isAuth, username, setUsername, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
