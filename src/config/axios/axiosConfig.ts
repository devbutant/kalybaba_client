import { API } from "@/utils/environment";
import axios from "axios";

const createAxiosInstance = () => {
    const axiosInstance = axios.create({
        baseURL: API.URL,
        withCredentials: true,
    });

    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (
                error.response?.status === 401 &&
                error.response.config.url !== "/auth/login"
            ) {
                console.log(error.response);
                window.location.href = "/";
            }

            return Promise.reject(error); // Rejeter l'erreur pour continuer à la gérer ailleurs
        }
    );

    return axiosInstance;
};

export default createAxiosInstance;
