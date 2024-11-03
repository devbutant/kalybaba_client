import { useAdListQuery } from "@/api/queries/ads/ad-list";
import { AdCard } from "@/components/ad/ad-card";
import { Pagination } from "@/components/pagination";
import { usePagination } from "@/hooks/pagination";
import { FC } from "react";

const Homepage: FC = () => {
    const { currentPage, handlePageChange, perPage } = usePagination();

    const { data, isLoading, error } = useAdListQuery(currentPage, perPage);

    const ads = data?.data || [];
    const totalCount = data?.meta.total || 0;
    const totalPages = data?.meta.lastPage || 1;

    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur lors du chargement des annonces</p>;

    return (
        <div className="min-h-screen flex flex-col sm:mx-2 xl:mx-auto">
            <div className="flex flex-col flex-1">
                <h2>Tout</h2>
                <h2 className="font-thin mb-6">
                    {totalCount === 0
                        ? "Aucun résultat"
                        : `${totalCount} résultat${totalCount > 1 ? "s" : ""}`}
                </h2>

                <div className="flex flex-col gap-6">
                    {ads &&
                        ads.map((ad, index) => <AdCard key={index} ad={ad} />)}
                </div>
            </div>

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
