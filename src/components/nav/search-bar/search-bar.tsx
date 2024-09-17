import React from "react";

const SearchBar: React.FC = () => {
    return (
        <input
            type="text"
            placeholder="Rechercher sur KalyBaba..."
            className="min-w-96 py-2 mx-1 px-4 rounded-lg border border-gray-300 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
    );
};

SearchBar.displayName = "SearchBar";

export { SearchBar };
