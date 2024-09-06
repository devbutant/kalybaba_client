import React, { useState } from "react";
import { useAuth } from "../../contexts/auth.context";
import { useOutsideClick } from "../../hooks/useOutsideClick"; // Assurez-vous que le chemin est correct
import { useUsers } from "../../hooks/useUsers";
import { UserDto } from "../../types/dto/user.dto";

const FriendsSelection: React.FC = () => {
    const { data: users, isLoading, isError } = useUsers();
    const { friends, setFriends } = useAuth();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleSelectUser = (userId: string) => {
        setFriends((prevFriends) => {
            if (prevFriends.includes(userId)) {
                return prevFriends.filter((id) => id !== userId);
            } else {
                return [...prevFriends, userId];
            }
        });
    };

    // Use the hook to detect clicks outside the component
    const containerRef = useOutsideClick(() => setIsOpen(false));

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading users</div>;

    return (
        <div className="relative p-4" ref={containerRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Select Friends
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded border border-gray-200">
                    <ul className="max-h-60 overflow-y-auto">
                        {users?.map((user: UserDto) => (
                            <li key={user.id} className="p-2 hover:bg-gray-100">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={friends.includes(user.id)}
                                        onChange={() =>
                                            handleSelectUser(user.id)
                                        }
                                        className="mr-2"
                                    />
                                    {user.name}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FriendsSelection;
