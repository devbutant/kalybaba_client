import React, { createContext, ReactNode, useContext } from "react";
import { ChatContext, ChatProvider } from "../chat-messages";
import { FriendsContext, FriendsProvider } from "../friends";
import { FriendsContextType } from "../friends/friends.context";

import { ChatContextType } from "../chat-messages/chat-messages.context";

interface CombinedChatContextType {
    chatMessages: ChatContextType;
    friends: FriendsContextType;
}

export const CombinedChatContext = createContext<
    CombinedChatContextType | undefined
>(undefined);

export const CombinedChatProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    return (
        <ChatProvider>
            <FriendsProvider>
                <CombinedChatContextWrapper>
                    {children}
                </CombinedChatContextWrapper>
            </FriendsProvider>
        </ChatProvider>
    );
};

const CombinedChatContextWrapper: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const chatMessages = useContext(ChatContext);
    const friends = useContext(FriendsContext);

    if (!chatMessages || !friends) {
        throw new Error(
            "CombinedChatContextWrapper must be used within both chatProvider and friendsProvider"
        );
    }

    return (
        <CombinedChatContext.Provider value={{ chatMessages, friends }}>
            {children}
        </CombinedChatContext.Provider>
    );
};
