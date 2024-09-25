import { useOutsideClick } from "@/hooks/outside-click";
import { DropdownMenuContextType } from "@/types/contexts";
import { createContext, FC, ReactNode, useState } from "react";

export const DropdownMenuContext = createContext<
    DropdownMenuContextType | undefined
>(undefined);

export const DropdownMenuProvider: FC<{ children: ReactNode }> = ({
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
