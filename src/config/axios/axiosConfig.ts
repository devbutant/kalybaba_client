import { API } from "@/utils/environment";
import axios from "axios";

const createAxiosInstance = () => {
    const axiosInstance = axios.create({
        baseURL: API.URL,
        withCredentials: true,
    });

    return axiosInstance;
};

export default createAxiosInstance;
