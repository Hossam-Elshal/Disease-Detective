import axios from "axios";

const instance = axios.create({
  baseURL: "https://improved-alien-sharply.ngrok-free.app", // غيرها لو بتستخدم proxy
  headers: {
    "Content-Type": "application/json",
  },
});

// ✨ Add token to every request automatically
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;