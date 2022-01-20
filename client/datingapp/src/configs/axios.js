import axios from "axios";

// dotenv.config({ path: path.join(__dirname, '.env') });

const customAxios = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 1000,
});

customAxios.interceptors.request.use((config) => {
  const accessTkn = localStorage.getItem("accessTkn") || "";
  if (accessTkn) config.headers.Authorization = `Bearer ${accessTkn}`;
  return config;
});

export default customAxios;
