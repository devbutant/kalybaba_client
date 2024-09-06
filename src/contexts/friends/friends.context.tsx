import React, { createContext, ReactNode, useState } from "react";

interface FriendsContextType {
    friends: string[];
    setFriends: React.Dispatch<React.SetStateAction<string[]>>;
}

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
