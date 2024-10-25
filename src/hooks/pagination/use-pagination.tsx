import { useState } from "react";

const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 24;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "instant" });
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        scrollToTop();
    };

    return {
        currentPage,
        setCurrentPage,
        perPage,
        handlePageChange,
    };
};

usePagination.displayName = "usePagination";

export { usePagination };
