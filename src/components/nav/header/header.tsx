import { SearchBar } from "../search-bar";
import { ChatButton } from "./chat";
import { ProfileMenuDropdown } from "./profile";
import { HeaderTitle } from "./title";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white py-4 shadow-md">
            <div className="max-w-screen-xl flex justify-between mx-auto">
                <HeaderTitle />
                <div className="nav-buttons flex">
                    <SearchBar />
                    <ChatButton />
                    <ProfileMenuDropdown />
                </div>
            </div>
        </header>
    );
};

Header.displayName = "Header";

export { Header };
