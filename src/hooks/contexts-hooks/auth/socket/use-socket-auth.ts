import { useContext } from "react";
import { SocketAuthContext } from "../../../../contexts/auth";

export const useSocketAuth = () => {
    const context = useContext(SocketAuthContext);
    if (context === undefined) {
        throw new Error(
            "useSocketAuth must be used within an SocketAuthProvider"
        );
    }
    return context;
};
