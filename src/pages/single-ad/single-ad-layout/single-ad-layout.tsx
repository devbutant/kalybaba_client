import { PropsWithChildren } from "react";
import { Tags } from "../../../components/ui/ad-card-tags";
import { Ad } from "../../../types";

interface SingleAdLayoutType {
    ad: Ad;
}

const SingleAdLayout: React.FC<PropsWithChildren<SingleAdLayoutType>> = (
    props
) => {
    const { children, ad } = props;

    return (
        <div
            className="mx-auto bg-white shadow-md rounded-lg overflow-hidden"
            style={{ width: "40rem" }}
        >
            <div className="p-6">
                <Tags ad={ad} />
                {children}
            </div>

            <div className="bg-gray-100 p-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">
                    Détails supplémentaires :
                </h3>
                <p className="text-gray-600">{ad.address}</p>
            </div>
        </div>
    );
};

SingleAdLayout.displayName = "SingleAdLayout";

export { SingleAdLayout };
