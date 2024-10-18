import { useCheckAuthQuery } from "@/api/queries/auth/check-auth/check-auth.query";
import { useFriendListQuery } from "@/api/queries/friends";
import { Button } from "@/components/button";
import { useFriends } from "@/hooks/contexts-hooks/friends";
import { useFriendsSelection } from "@/hooks/friends/friends-selection";
import { UserDto } from "@/types/dtos";
import { FC } from "react";

const FriendsSelection: FC = () => {
    const { data: friendList } = useFriendListQuery();
    const { friends } = useFriends();

    const { data } = useCheckAuthQuery();
    const currentUserId = data?.user?.id;

    const { handleSelectUser, isOpen, setIsOpen, containerRef } =
        useFriendsSelection();

    return (
        <div className="relative p-4" ref={containerRef}>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-indigo-700 hover:bg-indigo-800 focus:ring-2 focus:ring-opacity-50"
            >
                Inviter
            </Button>

            {isOpen && (
                <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded border border-gray-200">
                    <ul className="max-h-60 overflow-y-auto">
                        {friendList
                            ?.filter(
                                (user) =>
                                    user.id !== currentUserId &&
                                    !friends.includes(user.id)
                            )
                            .map((user: UserDto) => (
                                <li
                                    key={user.id}
                                    className="p-2 hover:bg-gray-100 flex items-center"
                                    onClick={() => handleSelectUser(user.id)}
                                >
                                    <input
                                        type="checkbox"
                                        checked={friends.includes(user.id)}
                                        onChange={() =>
                                            handleSelectUser(user.id)
                                        }
                                        className="mr-2"
                                    />
                                    <span>{user.name} </span>
                                    {user.connected && (
                                        <span className="w-2 h-2 bg-green-500 rounded-full ml-1" />
                                    )}
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
