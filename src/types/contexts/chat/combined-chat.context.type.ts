import { ChatContextType } from "./chat.context.type";
import { FriendsContextType } from "./friends.context.type";

export interface CombinedChatContextType {
    chatMessages: ChatContextType;
    friends: FriendsContextType;
}
