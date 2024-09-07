import React from "react";
import { useFriendsSelection } from "../../../hooks/friends/friends-selection";
import { useFriends } from "../../../hooks/friends/use-friends";
import { useUsersList } from "../../../hooks/users-list";
import { UserDto } from "../../../types/dto/user.dto";
import { Button } from "../../button";

const FriendsSelection: React.FC = () => {
    const { data: users } = useUsersList();
    const { friends } = useFriends();

    const { handleSelectUser, isOpen, setIsOpen, containerRef } =
        useFriendsSelection();

    return (
        <div className="relative p-4" ref={containerRef}>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-500 text-white"
            >
                Select Friends
            </Button>

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

FriendsSelection.displayName = "FriendsSelection";

export { FriendsSelection };
