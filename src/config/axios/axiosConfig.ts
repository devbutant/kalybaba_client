import { API } from "@/utils/environment";
import axios from "axios";

const createAxiosInstance = (token: string | null = null) => {
    const axiosInstance = axios.create({
        baseURL: API.URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
        },
    });

    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (
                error.response?.status === 401 &&
                error.response.config.url !== "/auth/login"
            ) {
                console.log(error.response);

                // Déconnexion automatique si le serveur retourne une erreur 401
                localStorage.removeItem("access_token");
                window.location.href = "/";
            }

            return Promise.reject(error); // Rejeter l'erreur pour continuer à la gérer ailleurs
        }
    );

    return axiosInstance;
};

export default createAxiosInstance;
