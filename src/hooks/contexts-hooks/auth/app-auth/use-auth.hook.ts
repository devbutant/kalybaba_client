import { AppAuthContext } from "@/contexts/auth/app-auth";
import { useContext } from "react";

export const useAppAuth = () => {
    const context = useContext(AppAuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
