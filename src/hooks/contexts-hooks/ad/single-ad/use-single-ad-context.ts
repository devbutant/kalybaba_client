import { useContext } from "react";
import { SingleAdContext } from "../../../../contexts/ad";

export const useSingleAdContext = () => {
    const context = useContext(SingleAdContext);
    if (context === undefined) {
        throw new Error(
            "useSingleAdContext must be used within an SingleAdProvider"
        );
    }
    return context;
};
