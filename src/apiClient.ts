import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://baby-url.vercel.app",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQzOWZiMGM2ODBlOGRhY2VkMzQ2MDgiLCJlbWFpbCI6ImJhc2F2YXJhakBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImJhc2F2YXJhakBnbWFpbCIsImlhdCI6MTcwODUyMTEyMSwiZXhwIjoxNzA4NjA3NTIxfQ.n2G3mYaNw6RwXKn1rCDM9Vkr676jMuB79V61QDL5jZ8",
  },
});

export default apiClient;
