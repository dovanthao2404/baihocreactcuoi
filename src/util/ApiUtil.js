import axios from "axios";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE4LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzU2MTYwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjQ3NzA5MjAwfQ.Gn_duD0LZ6aamu893NNv17QlXn6HTFtyfWIFAIMBjEM";

const api = axios.create({
  baseURL: "http://movienew.cybersoft.edu.vn",
});

api.interceptors.request.use(
  (config) => {
    config.headers = {
      TokenCybersoft: TOKEN,
    };
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default api;
