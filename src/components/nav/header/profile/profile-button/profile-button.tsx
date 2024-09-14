import React from "react";

// TODO: a mettre dans les types
interface ProfileButtonProps {
    onClick: () => void;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ onClick }) => (
    <button
        type="button"
        className="relative flex items-center justify-center rounded-full p-1 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
        onClick={onClick}
    >
        <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User"
        />
    </button>
);

export { ProfileButton };
