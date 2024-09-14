import React from "react";

const RememberMe: React.FC = () => {
    return (
        <div className="flex items-center">
            <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
            >
                Se souvenir de moi
            </label>
        </div>
    );
};

RememberMe.displayName = "RememberMe";

export { RememberMe };
