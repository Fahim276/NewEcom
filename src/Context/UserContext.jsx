
import React, { createContext, useContext, useState } from "react";

// Create a UserContext
const UserContext = createContext();

// Custom hook to use user context
export const useUser = () => useContext(UserContext);

// UserProvider component to wrap the app and provide the user data
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to log in and set user data
  const login = (userData) => {
    setUser(userData);
  };

  // Function to log out and clear user data
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
