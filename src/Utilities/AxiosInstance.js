import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://dbl-server.vercel.app/api/v1",
});

export default axiosInstance;