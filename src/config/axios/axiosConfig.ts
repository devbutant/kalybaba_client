import { API } from "@/utils/environment";
import axios from "axios";

const createAxiosInstance = () => {
    const isProduction = import.meta.env.MODE === "production";
    const baseURL = isProduction ? "/api" : API.URL;

    const axiosInstance = axios.create({
        baseURL: baseURL,
        withCredentials: true,
    });

    return axiosInstance;
};

export default createAxiosInstance;
