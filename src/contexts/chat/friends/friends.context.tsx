import { FriendsContextType } from "@/types/contexts";
import { createContext, FC, ReactNode, useState } from "react";

export const FriendsContext = createContext<FriendsContextType | undefined>(
    undefined
);

export const FriendsProvider: FC<{ children: ReactNode }> = ({ children }) => {
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
