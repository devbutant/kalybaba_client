import { useContext } from "react";
import { FriendsContext } from "../../../contexts/chat";

export const useFriends = () => {
    const context = useContext(FriendsContext);
    if (context === undefined) {
        throw new Error("useFriends must be used within an FriendsProvider");
    }
    return context;
};
