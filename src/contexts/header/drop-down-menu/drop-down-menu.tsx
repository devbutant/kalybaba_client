import React, { createContext, ReactNode, useState } from "react";
import { useOutsideClick } from "../../../hooks/outside-click";
import { DropdownMenuContextType } from "../../../types/contexts/header/drop-down-menu";

export const DropdownMenuContext = createContext<
    DropdownMenuContextType | undefined
>(undefined);

export const DropdownMenuProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuRef = useOutsideClick(() => setIsOpen(false));

    return (
        <DropdownMenuContext.Provider
            value={{
                isOpen,
                setIsOpen,
                menuRef,
            }}
        >
            {children}
        </DropdownMenuContext.Provider>
    );
};
