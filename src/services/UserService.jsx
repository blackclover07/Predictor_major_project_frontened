import React from "react";
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const getUsers = async (getToken) => {
  const token = await getToken();
  const response = await API.get("/admin/users/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateUserRole = async (clerk_id, role, getToken) => {
  const token = await getToken();

  const response = await API.patch(
    `/admin/users/${clerk_id}/role/`,
    {
      role,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
