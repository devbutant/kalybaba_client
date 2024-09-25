import { useOutsideClick } from "@/hooks/outside-click";
import React, { createContext, ReactNode, useState } from "react";
import { DropdownMenuContextType } from "../../../types/contexts";

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
