import axios from "axios";

export const apiBrewDog = axios.create({
  baseURL: process.env.PUBLIC_API_URL
});
