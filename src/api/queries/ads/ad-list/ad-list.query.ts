import { fetchAdList } from "@/api/services/ads";
import { useQuery } from "@tanstack/react-query";

export interface AdDto {
    id: string;
    title: string;
    description: string;
    photos: string[];
    city: string;
    price: number;
    authorId?: string;
    author: {
        id: string;
        email: string;
        name: string;
        city: string;
        phone: string;
        connected: boolean;
    };
    typeEnum?: string;
    categoryEnum?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface PaginationMeta {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    prev: number | null;
    next: number | null;
}

export interface AdResponse {
    data: AdDto[];
    meta: PaginationMeta;
}

export const useAdListQuery = (page: number = 1, perPage: number = 10) => {
    return useQuery<AdResponse>({
        queryKey: ["ads", page, perPage],
        queryFn: () => fetchAdList(page, perPage),
    });
};
