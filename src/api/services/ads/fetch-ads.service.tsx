import createAxiosInstance from "@/config/axios/axiosConfig";

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

export const fetchAdList = async (
    page: number = 1,
    perPage: number = 10
): Promise<AdResponse> => {
    const axiosInstance = createAxiosInstance();
    const { data } = await axiosInstance.get(
        `/ads?page=${page}&perPage=${perPage}`
    );
    return data;
};
