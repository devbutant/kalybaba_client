import axios from "axios";
import { API } from "../../utils/environment";

const createAxiosInstance = (token: string | null) => {
    return axios.create({
        baseURL: API.URL,
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
        },
    });
};

export default createAxiosInstance;
