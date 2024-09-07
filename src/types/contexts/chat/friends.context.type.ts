import React from "react";

export interface FriendsContextType {
    friends: string[];
    setFriends: React.Dispatch<React.SetStateAction<string[]>>;
}
