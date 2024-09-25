import { Dispatch, SetStateAction } from "react";

export interface FriendsContextType {
    friends: string[];
    setFriends: Dispatch<SetStateAction<string[]>>;
}
