import axios from "axios";

export const authApi = axios.create({
  baseURL: process.env.API_AUTH_URL
});
