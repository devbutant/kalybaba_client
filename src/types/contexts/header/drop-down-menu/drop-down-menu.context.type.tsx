import { Dispatch, RefObject, SetStateAction } from "react";

export interface DropdownMenuContextType {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    menuRef: RefObject<HTMLDivElement>;
}
