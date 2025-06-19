// 포트 번호를 관리
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: `http://localhost:7777/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
