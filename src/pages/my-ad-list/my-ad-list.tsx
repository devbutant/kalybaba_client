import { useUserAdListQuery } from "@/api/queries/ads/user-ad-list";
import { Pagination } from "@/components/pagination";
import { usePagination } from "@/hooks/pagination";
import { FC } from "react";
import { UserAdList } from "../user-ad-list";

const MyAdList: FC = () => {
    const { currentPage, handlePageChange, perPage } = usePagination();
    const { data, isLoading, error } = useUserAdListQuery(currentPage, perPage);

    const totalPages = (data?.meta && data?.meta.lastPage) || 1;

    if (isLoading) return <p>Chargement...</p>;
    if (error) return <p>Erreur lors du chargement des annonces</p>;

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex flex-col flex-1">
                <UserAdList data={data?.data || []} />
            </main>
            <Pagination
                currentPage={currentPage}
                onPageChange={handlePageChange}
                totalPages={totalPages}
            />
        </div>
    );
};

MyAdList.displayName = "MyAdList";

export { MyAdList };
