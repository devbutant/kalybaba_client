import { DropdownMenuContext } from "@/contexts/header";
import { useContext } from "react";

export const useDropdownMenu = () => {
    const context = useContext(DropdownMenuContext);
    if (context === undefined) {
        throw new Error("useDropdownMenu must be used within an ChatProvider");
    }
    return context;
};
