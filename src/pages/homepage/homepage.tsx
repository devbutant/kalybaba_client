import { useAdListQuery } from "@/api/queries/ads/ad-list";
import { AdCard } from "@/components/ad/ad-card";
import { Pagination } from "@/components/pagination";
import { FC, useState } from "react";

const Homepage: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 12;
    const { data, isLoading, error } = useAdListQuery(currentPage, perPage);

    const ads = data?.data || [];
    const totalCount = data?.meta.total || 0;
    const totalPages = data?.meta.lastPage || 1;

    console.log("ads ", ads);
    console.log("totalCount ", totalCount);
    console.log("totalPages ", totalPages);

    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur lors du chargement des annonces</p>;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="min-h-screen flex flex-col sm:mx-2 xl:mx-auto">
            <main className="flex flex-col flex-1">
                <h2 className="text-2xl font-semibold mb-6">
                    Dernières annonces
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
