import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true, // Always enable cookies for auth
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const apiClient = axiosInstance;

export default apiClient;
