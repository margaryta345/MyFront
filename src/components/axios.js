import axios from "axios";
//шоб кожен раз не писати шлях
const instance = axios.create({
  baseURL: "http://my-api.onrender.com",
});
const API = axios.create({
  baseURL: "https:/emkc.org/api/v2/piston",
});

//при кожному запросі буде перевіряти чи є токен
instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});
export default instance;

export const executeCode = async (sourseCode) => {
  const response = await API.post("/execute", {
    language: "python",
    version: "3.10.0",
    files: [
      {
        content: sourseCode,
      },
    ],
  });
  return response.data;
};
