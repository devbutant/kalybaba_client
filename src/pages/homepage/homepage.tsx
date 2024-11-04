import { useAdListQuery } from "@/api/queries/ads/ad-list";
import { AdCard } from "@/components/ad";
import { Pagination } from "@/components/pagination";
import { usePagination } from "@/hooks/pagination";
import { FC } from "react";
import { Helmet } from "react-helmet-async";

const Homepage: FC = () => {
    const { currentPage, handlePageChange, perPage } = usePagination();

    const { data, isLoading, error } = useAdListQuery(currentPage, perPage);

    const ads = data?.data || [];
    const totalCount = data?.meta.total || 0;
    const totalPages = data?.meta.lastPage || 1;

    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur lors du chargement des annonces</p>;

    return (
        <>
            <Helmet>
                <title>ShareMySetup | Home</title>
                <meta
                    name="description"
                    content="Discover the best setups for gaming and workspaces, and connect with a community of tech enthusiasts."
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@your_twitter_handle" />
                <meta name="twitter:creator" content="@your_twitter_handle" />
                <meta
                    name="twitter:title"
                    content="ShareMySetup - Your Setup Hub"
                />
                <meta
                    name="twitter:description"
                    content="Explore setups, tips, and inspiration for optimizing your workspace and gaming experience."
                />
                <meta name="twitter:image" content="url_to_image" />
                <meta
                    property="og:title"
                    content="ShareMySetup - Your Setup Hub"
                />
                <meta
                    property="og:description"
                    content="Discover the best setups for gaming and workspaces, and connect with a community of tech enthusiasts."
                />
                <meta property="og:image" content="url_to_image" />
                <meta property="og:site_name" content="ShareMySetup" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
            </Helmet>

            <div className="flex flex-col flex-1 w-full">
                <div className="flex flex-col flex-1 mx-2">
                    <h2>Tout</h2>
                    <h2 className="font-thin mb-6">
                        {totalCount === 0
                            ? "Aucun résultat"
                            : `${totalCount} résultat${
                                  totalCount > 1 ? "s" : ""
                              }`}
                    </h2>

                    <div className="flex flex-col gap-4">
                        {ads &&
                            ads.map((ad, index) => (
                                <AdCard key={index} ad={ad} />
                            ))}
                    </div>
                </div>

                <Pagination
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    totalPages={totalPages}
                />
            </div>
        </>
    );
};

Homepage.displayName = "Homepage";

export { Homepage };
