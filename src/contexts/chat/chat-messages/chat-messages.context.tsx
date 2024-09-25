import { ChatContextType } from "@/types/contexts";
import { createContext, FC, ReactNode, useState } from "react";

export const ChatContext = createContext<ChatContextType | undefined>(
    undefined
);

export const ChatProvider: FC<{ children: ReactNode }> = ({ children }) => {
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
