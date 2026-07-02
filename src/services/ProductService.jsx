import React from "react";
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const getProducts = async () => {
  const response = await API.get("/products/");
  return response.data;
};
