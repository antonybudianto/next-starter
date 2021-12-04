import React, { useState, useContext } from "react";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const ctx = { user, setUser, loading, setLoading };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

export const useUser = () => useContext(AuthContext);
