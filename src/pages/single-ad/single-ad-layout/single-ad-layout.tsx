import { Ad } from "@/types";
import { FC, PropsWithChildren } from "react";

interface SingleAdLayoutType {
    ad: Ad;
}

const SingleAdLayout: FC<PropsWithChildren<SingleAdLayoutType>> = (props) => {
    const { children, ad } = props;

    const formattedDate = new Intl.DateTimeFormat("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(ad.createdAt));

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden sm:w-full border max-w-screen-xl">
            {children}

            <div className="bg-gray-100 p-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mx-auto max-w-5xl">
                    Créée le {formattedDate}
                </h3>
            </div>
        </div>
    );
};

SingleAdLayout.displayName = "SingleAdLayout";

export { SingleAdLayout };
