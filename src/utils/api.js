import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL;

// ✅ Pre-configured axios instance
export const api = axios.create({
  baseURL: API,
  withCredentials: true, // keep this if you use cookies/JWT
});
