import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/react-router";
import Loader from "../Components/Loader";

const ALLOWED_ROLES = ["admin", "superadmin"];

export default function AdminRoute({ children }) {
  const { user, isLoaded } = useUser();
  const role = user?.publicMetadata.role;

  if (!isLoaded) {
    return <Loader />;
  }
  if (role === undefined || role == null) {
    return <Loader />;
  }

  if (role !== "admin" && role !== "super_admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}
