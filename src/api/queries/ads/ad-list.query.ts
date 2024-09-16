import { useQuery } from "@tanstack/react-query";
import { AdDto } from "../../../types";
import { fetchAdList } from "../../services/ads";

export const useAdListQuery = () => {
    return useQuery<AdDto[]>({
        queryKey: ["ads"],
        queryFn: fetchAdList,
        enabled: true,
    });
};
