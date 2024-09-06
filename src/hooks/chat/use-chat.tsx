import { useContext } from "react";
import { ChatContext } from "../../contexts/chat";

export const useChat = () => {
    const context = useContext(ChatContext);
    if (context === undefined) {
        throw new Error("useChat must be used within an ChatProvider");
    }
    return context;
};
