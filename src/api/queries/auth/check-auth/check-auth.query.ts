import { checkAuth } from "@/api/services/check-auth/check-auth";
import { useQuery } from "@tanstack/react-query";

export const useCheckAuthQuery = () => {
    return useQuery({
        queryKey: ["check-auth"],
        queryFn: checkAuth,
    });
};
