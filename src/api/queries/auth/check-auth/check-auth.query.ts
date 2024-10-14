import createAxiosInstance from "@/config/axios/axiosConfig";
import { useQuery } from "@tanstack/react-query";

const checkAuth = async () => {
    const axiosInstance = createAxiosInstance();
    const { data: user } = await axiosInstance.get("/auth/me");
    return user;
};

export const useCheckAuthQuery = () => {
    return useQuery({
        queryKey: ["check-auth"],
        queryFn: () => checkAuth(),
    });
};
