import React from "react";
import { Navigate } from "react-router-dom";
import { useRole } from "./AuthContext";
import Loader from "../Components/Loader";

const ALLOWED_ROLES = ["admin", "superadmin"];

export default function AdminRoute({ children }) {
  const { role } = useRole();

  if (role === undefined) {
    return <Loader />;
  }

  if (!ALLOWED_ROLES.includes(role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
