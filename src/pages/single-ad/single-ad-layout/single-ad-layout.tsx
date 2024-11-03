import { Tags } from "@/components/ui/tag";
import { Ad } from "@/types";
import { FC, PropsWithChildren } from "react";

interface SingleAdLayoutType {
    ad: Ad;
}

const SingleAdLayout: FC<PropsWithChildren<SingleAdLayoutType>> = (props) => {
    const { children, ad } = props;

    return (
        <div
            className="bg-white shadow-md rounded-lg overflow-hidden sm:w-screen border"
            style={{ maxWidth: "40rem" }}
        >
            <div className="p-6">
                <Tags typeEnum={ad.typeEnum} categoryEnum={ad.categoryEnum} />
                {children}
            </div>

            <div className="bg-gray-100 p-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">
                    Détails supplémentaires :
                </h3>
            </div>
        </div>
    );
};

SingleAdLayout.displayName = "SingleAdLayout";

export { SingleAdLayout };
