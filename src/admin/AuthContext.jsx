import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "@clerk/react-router";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(undefined);
  const { isLoaded, isSignedIn, getToken } = useAuth();

  useEffect(() => {
    const fetchRole = async () => {
      if (!isLoaded) return;

      if (!isSignedIn) {
        setRole(null); // explicitly clear it instead of leaving stale state
        return;
      }

      try {
        const token = await getToken();
        if (!token) return;

        const res = await axios.get("http://127.0.0.1:8000/api/auth/me/", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setRole(res.data.role);
        console.log(res.data)
      } catch (error) {
        console.log("Role fetch error:", error);
        setRole(null);
      }
    };

    fetchRole();
  }, [isLoaded, isSignedIn, getToken]);
  return (
    <AuthContext.Provider value={{ role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useRole must be used inside AuthProvider");
  return context;
};
