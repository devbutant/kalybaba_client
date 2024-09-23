import React from "react";
import { useDropdownMenu } from "../../../../../hooks/contexts-hooks/header";
import { useHeader } from "../../../../../hooks/layout";
import { DropdownMenu } from "../dropdown-menu";
import { ProfileButton } from "../profile-button";

const ProfileMenuDropdown: React.FC = () => {
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
