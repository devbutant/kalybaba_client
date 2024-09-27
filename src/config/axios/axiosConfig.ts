import { API } from "@/utils/environment";
import axios from "axios";

const createAxiosInstance = (token: string | null = null) => {
    return axios.create({
        baseURL: API.URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
        },
    });
};

export default createAxiosInstance;
