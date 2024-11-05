import { FC } from "react";

const SearchBar: FC = () => {
    return (
        <input
            type="text"
            placeholder="Rechercher"
            className="md:min-w-80 py-2 mx-1 px-4 rounded-lg border border-gray-300 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 hidden sm:block"
        />
    );
};

SearchBar.displayName = "SearchBar";

export { SearchBar };
