import { useContext } from "react";
import { AppAuthContext } from "../../../contexts/app-auth";

export const useAppAuth = () => {
    const context = useContext(AppAuthContext);
    if (context === undefined) {
        throw new Error("useAppAuth must be used within an AppAuthProvider");
    }
    return context;
};
