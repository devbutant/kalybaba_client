import { CombinedAuthContext } from "@/contexts/auth";
import { useContext } from "react";

export const useCombinedAuth = () => {
    const context = useContext(CombinedAuthContext);
    if (!context) {
        throw new Error(
            "useCombinedAuth must be used within a CombinedAuthProvider"
        );
    }
    return context;
};
