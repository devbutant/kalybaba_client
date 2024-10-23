import { AdCard } from "@/components/ad/ad-card";
import { Pagination } from "@/components/pagination";
import { usePagination } from "@/hooks/pagination";
import { FC } from "react";

const Homepage: FC = () => {
    const { currentPage, currentPageData } = usePagination();
    const { ads, totalCount, totalPages, isLoading, error, handlePageChange } =
        currentPageData;

    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur lors du chargement des annonces</p>;

    return (
        <div className="min-h-screen flex flex-col sm:mx-2 xl:mx-auto">
            <main className="flex flex-col flex-1">
                <h2 className="text-2xl font-semibold mb-6">
                    Nombre total d'annonces : {totalCount}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {ads &&
                        ads.map((ad, index) => <AdCard key={index} ad={ad} />)}
                </div>
            </main>

            <Pagination
                currentPage={currentPage}
                onPageChange={handlePageChange}
                totalPages={totalPages}
            />
        </div>
    );
};

Homepage.displayName = "Homepage";

export { Homepage };
