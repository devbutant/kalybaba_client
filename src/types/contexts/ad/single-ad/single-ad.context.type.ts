import React from "react";

export interface SingleAdContextType {
    editFormStates: {
        isEditing: boolean;
        setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    };
}
