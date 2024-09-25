import { SocketAuthContext } from "@/contexts/auth";
import { useContext } from "react";

export const useSocketAuth = () => {
    const context = useContext(SocketAuthContext);
    if (context === undefined) {
        throw new Error(
            "useSocketAuth must be used within an SocketAuthProvider"
        );
    }
    return context;
};
