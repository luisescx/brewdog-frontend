import axios from "axios";

export const apiBrewDog = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});
