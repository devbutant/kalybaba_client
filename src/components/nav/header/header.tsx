import { FiPlusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { SearchBar } from "../search-bar";
import { ProfileMenuDropdown } from "./profile";
import { HeaderTitle } from "./title";

const CreateAdButton = () => {
    return (
        <Link
            to="/deposer-une-annonce"
            className="hidden items-center bg-blue-900 text-white mx-2 px-4 py-2 rounded-md hover:bg-blue-800 transition-colors md:flex"
        >
            <FiPlusCircle className="mr-2 text-xl" />
            Déposer une annonce
        </Link>
    );
};

const Header = () => {
    return (
        <header className="px-2 md:px-0 bg-gray-800 text-white py-4 shadow-md">
            <div className="max-w-screen-xl flex justify-between mx-auto">
                <HeaderTitle />
                <div className="nav-buttons flex">
                    <SearchBar />
                    <CreateAdButton />
                    {/* <ChatButton /> */}
                    <ProfileMenuDropdown />
                </div>
            </div>
        </header>
    );
};

Header.displayName = "Header";

export { Header };
