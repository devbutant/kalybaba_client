import { CombinedChatContextType } from "@/types/contexts";
import { createContext, FC, ReactNode, useContext } from "react";
import {
    ChatContext,
    ChatProvider,
    FriendsContext,
    FriendsProvider,
} from "../index";

export const CombinedChatContext = createContext<
    CombinedChatContextType | undefined
>(undefined);

export const CombinedChatProvider: FC<{ children: ReactNode }> = ({
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

const CombinedChatContextWrapper: FC<{ children: ReactNode }> = ({
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
