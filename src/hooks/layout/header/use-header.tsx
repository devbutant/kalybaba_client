import { useDropdownMenu } from "../../contexts-hooks/header";

const useHeader = () => {
    const { setIsOpen } = useDropdownMenu();

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };
    return { toggleMenu };
};

useHeader.displayName = "useHeader";

export { useHeader };
