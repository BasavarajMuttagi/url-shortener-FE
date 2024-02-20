import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://baby-url.vercel.app",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQzOWZiMGM2ODBlOGRhY2VkMzQ2MDgiLCJlbWFpbCI6ImJhc2F2YXJhakBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImJhc2F2YXJhakBnbWFpbCIsImlhdCI6MTcwODQyNjQ1MywiZXhwIjoxNzA4NTEyODUzfQ.qjYevd9pgMfQuQ4VHL07tDtxEPebSlJwzmuzgU9CMak",
  },
});

export default apiClient;
