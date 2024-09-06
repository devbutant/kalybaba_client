import React, { createContext, Dispatch, ReactNode, useState } from "react";

interface ChatContextType {
    messages: Array<{ id: string; userId: string; data: string }>;
    setMessages: Dispatch<
        React.SetStateAction<
            Array<{ id: string; userId: string; data: string }>
        >
    >;
}

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
