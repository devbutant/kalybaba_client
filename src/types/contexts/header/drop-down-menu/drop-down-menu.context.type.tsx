import React from "react";

export interface DropdownMenuContextType {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    menuRef: React.RefObject<HTMLDivElement>;
}
