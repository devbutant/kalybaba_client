import { FC } from "react";

interface PaginationProps {
    currentPage: number;
    onPageChange: (page: number) => void;
    totalPages: number;
}

const Pagination: FC<PaginationProps> = ({
    currentPage,
    onPageChange,
    totalPages,
}) => {
    const getPageNumbers = () => {
        const pages = [];
        const startPage = Math.max(1, currentPage - 3);
        const endPage = Math.min(totalPages, currentPage + 3);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="flex justify-center mt-6">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`ml-2 p-2 rounded ${
                    currentPage === 1 ? "bg-gray-100" : "bg-gray-300"
                }`}
            >
                Précédent
            </button>

            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`mx-1 p-2 rounded ${
                        currentPage === page
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300"
                    }`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`ml-2 p-2 rounded ${
                    currentPage === totalPages ? "bg-gray-100" : "bg-gray-300"
                }`}
            >
                Suivant
            </button>
        </div>
    );
};

Pagination.displayName = "Pagination";

export { Pagination };
