import { useLogout } from "@/hooks/auth";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const DropdownMenu: FC = () => {
    const { handleLogout } = useLogout();

    return (
        <div
            className="absolute right-0 z-10 mt-0 top-12 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
        >
            <NavLink
                to="/profil"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
            >
                Mon profil
            </NavLink>
            <NavLink
                to="/mes-annonces"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
            >
                Mes annonces
            </NavLink>
            <NavLink
                to="/"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
            >
                Paramètres
            </NavLink>
            <NavLink
                to="/connexion"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={handleLogout}
            >
                Déconnexion
            </NavLink>
        </div>
    );
};

export { DropdownMenu };
