import createAxiosInstance from "@/config/axios/axiosConfig";
import { useQuery } from "@tanstack/react-query";

const checkAuth = async () => {
    const axiosInstance = createAxiosInstance();
    const { data: user } = await axiosInstance.get("/auth/check");
    return user;
};

export const useAuth = () => {
    return useQuery({
        queryKey: ["auth"],
        queryFn: checkAuth,
        enabled: true,
    });
};
