import React from "react";
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

export const getReviews = async (page = 1) => {
  const response = await API.get(`/reviews/?page=${page}`);
  return response.data;
};
