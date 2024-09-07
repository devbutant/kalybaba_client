import { useContext } from "react";
import { CombinedAuthContext } from "../../../contexts/auth/combined-auth";

export const useCombinedAuth = () => {
    const context = useContext(CombinedAuthContext);
    if (!context) {
        throw new Error(
            "useCombinedAuth must be used within a CombinedAuthProvider"
        );
    }
    return context;
};
