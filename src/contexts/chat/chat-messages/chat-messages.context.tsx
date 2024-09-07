import React, { createContext, ReactNode, useState } from "react";
import { ChatContextType } from "../../../types/contexts";

export const ChatContext = createContext<ChatContextType | undefined>(
    undefined
);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [messages, setMessages] = useState<
        Array<{ id: string; userId: string; data: string }>
    >([]);

    return (
        <ChatContext.Provider
            value={{
                messages,
                setMessages,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};
