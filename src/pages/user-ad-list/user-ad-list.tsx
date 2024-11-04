import { useUserAdListQuery } from "@/api/queries/ads/user-ad-list";
import { AdResponse } from "@/api/services/ads/user-ad-list/fetch-user-ad-list.service";
import { AdCard } from "@/components/ad/ad-card";
import { useAppAuth } from "@/hooks/contexts-hooks/auth/app-auth/use-auth.hook";
import { usePagination } from "@/hooks/pagination";
import { FC } from "react";

const UserAdList: FC<AdResponse> = (props) => {
    const { data: ads } = props;
    const { currentPage, perPage } = usePagination();
    const { data, isLoading, error } = useUserAdListQuery(currentPage, perPage);
    const { authData } = useAppAuth();

    const totalCount = (data?.meta && data?.meta.total) || 0;

    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur lors du chargement des annonces</p>;

    return (
        <div className="flex flex-col flex-1 mx-2 md:mx-0">
            <h2>{authData?.user.name}</h2>
            <h2 className="font-thin mb-6">
                {totalCount === 0
                    ? "Aucun résultat"
                    : `${totalCount} résultat${totalCount > 1 ? "s" : ""}`}
            </h2>

            <div className="flex flex-col gap-4">
                {ads && ads.map((ad, index) => <AdCard key={index} ad={ad} />)}
            </div>
        </div>
    );
};

UserAdList.displayName = "UserAdList";

export { UserAdList };
