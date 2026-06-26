import React, { useState, useEffect } from "react";
import { useAuth } from "@clerk/react-router";
import { Navigate } from "react-router-dom";
import Loader from "../Components/Loader";

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useAuth();

  const [minTime, setMinTime] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTime(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded || !minTime) {
    return <Loader />;
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
