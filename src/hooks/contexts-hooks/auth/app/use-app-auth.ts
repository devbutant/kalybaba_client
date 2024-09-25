import { AppAuthContext } from "@/contexts/auth";
import { useContext } from "react";

export const useAppAuth = () => {
    const context = useContext(AppAuthContext);
    if (context === undefined) {
        throw new Error("useAppAuth must be used within an AppAuthProvider");
    }
    return context;
};
