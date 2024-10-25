import { useAdListQuery } from "@/api/queries/ads/ad-list";
import { useState } from "react";

const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 24;
    const { data, isLoading, error } = useAdListQuery(currentPage, perPage);

    const ads = data?.data || [];
    const totalCount = data?.meta.total || 0;
    const totalPages = data?.meta.lastPage || 1;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "instant" });
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        scrollToTop();
    };

    const currentPageData = {
        ads,
        totalCount,
        totalPages,
        isLoading,
        error,
        handlePageChange,
    };

    return {
        currentPage,
        setCurrentPage,
        perPage,
        currentPageData,
    };
};

usePagination.displayName = "usePagination";

export { usePagination };
