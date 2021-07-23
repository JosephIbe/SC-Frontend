import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://api.tvmaze.com',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 15000,
});

export default axiosInstance;