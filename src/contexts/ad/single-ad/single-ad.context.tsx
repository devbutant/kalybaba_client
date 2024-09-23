import React, { createContext, ReactNode, useState } from "react";
import { SingleAdContextType } from "../../../types/contexts";

export const SingleAdContext = createContext<SingleAdContextType | undefined>(
    undefined
);

export const SingleAdProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const editFormStates = {
        isEditing,
        setIsEditing,
    };

    return (
        <SingleAdContext.Provider value={{ editFormStates }}>
            {children}
        </SingleAdContext.Provider>
    );
};
