import { NavLink } from "react-router-dom";
import { useDropdownMenu } from "../../../hooks/contexts-hooks/header";
import { useHeader } from "../../../hooks/layout";
import { ChatButton } from "./chat";
import { ProfileButton } from "./profile";
import { DropdownMenu } from "./profile/dropdown-menu";

const Header = () => {
    const { menuRef } = useDropdownMenu();
    const { toggleMenu } = useHeader();

    return (
        <header className="bg-gray-800 text-white py-4 shadow-md">
            <div className="max-w-screen-xl flex justify-between mx-auto">
                <NavLink to="/" className="flex items-center">
                    <h1 className="text-center text-3xl font-bold">Yadetout</h1>
                </NavLink>
                <div className="relative flex flex-row" ref={menuRef}>
                    <ChatButton />
                    <ProfileButton onClick={toggleMenu} />
                    <DropdownMenu />
                </div>
            </div>
        </header>
    );
};

Header.displayName = "Header";

export { Header };
