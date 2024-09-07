import React, { createContext, ReactNode, useState } from "react";
import { FriendsContextType } from "../../../types/contexts";

export const FriendsContext = createContext<FriendsContextType | undefined>(
    undefined
);

export const FriendsProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [friends, setFriends] = useState<string[]>([]);

    return (
        <FriendsContext.Provider
            value={{
                friends,
                setFriends,
            }}
        >
            {children}
        </FriendsContext.Provider>
    );
};
