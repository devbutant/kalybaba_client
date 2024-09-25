import { useDropdownMenu } from "@/hooks/contexts-hooks/header";
import { useHeader } from "@/hooks/layout";
import { FC } from "react";
import { DropdownMenu } from "../dropdown-menu";
import { ProfileButton } from "../profile-button";

const ProfileMenuDropdown: FC = () => {
    const { menuRef, isOpen } = useDropdownMenu();
    const { toggleMenu } = useHeader();

    return (
        <div
            className="relative flex flex-row"
            ref={menuRef}
            onClick={toggleMenu}
        >
            <ProfileButton />
            {isOpen && <DropdownMenu />}
        </div>
    );
};

export { ProfileMenuDropdown };
