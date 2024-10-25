import { useUserAdListQuery } from "@/api/queries/ads/user-ad-list";
import { AdResponse } from "@/api/services/ads/user-ad-list/fetch-user-ad-list.service";
import { AdCard } from "@/components/ad/ad-card";
import { usePagination } from "@/hooks/pagination";
import { FC } from "react";

const UserAdList: FC<AdResponse> = (props) => {
    const { data: ads } = props;
    const { currentPage, perPage } = usePagination();
    const { data, isLoading, error } = useUserAdListQuery(currentPage, perPage);

    const totalCount = (data?.meta && data?.meta.total) || 0;

    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur lors du chargement des annonces</p>;

    return (
        <main className="flex flex-col flex-1">
            <h2 className="text-2xl font-semibold mb-6">
                Mes {totalCount} annonces
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {ads &&
                    ads.map((ad, index) => (
                        <div key={index} className="relative">
                            <AdCard ad={ad} />
                        </div>
                    ))}
            </div>
        </main>
    );
};

UserAdList.displayName = "UserAdList";

export { UserAdList };
