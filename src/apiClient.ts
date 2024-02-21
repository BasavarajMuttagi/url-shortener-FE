import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://baby-url.vercel.app",
});

export default apiClient;
