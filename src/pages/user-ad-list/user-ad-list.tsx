import { useUserAdListQuery } from "@/api/queries/ads/user-ad-list";
import { AdCard } from "@/components/ad/ad-card";
import { FC } from "react";

const UserAdList: FC = () => {
    const { data: ads } = useUserAdListQuery();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ads &&
                ads.map((ad, index) => (
                    <div key={index} className="relative">
                        <AdCard ad={ad} />
                    </div>
                ))}
        </div>
    );
};

UserAdList.displayName = "UserAdList";

export { UserAdList };
