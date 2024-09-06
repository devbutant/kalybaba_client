// FriendsList.tsx
import React from "react";
import { useAuth } from "../../contexts/auth.context";

const FriendsList: React.FC = () => {
    const { friends, setFriends } = useAuth();

    const handleSelectFriend = (friendId: string) => {
        setFriends((prevFriends: string[]) => {
            if (prevFriends.includes(friendId)) {
                return prevFriends.filter((id) => id !== friendId);
            } else {
                return [...prevFriends, friendId];
            }
        });
    };

    return (
        <div className="p-4 border-2 border-cyan-500">
            <h2>Amis</h2>
            <ul>
                {friends.map((friend) => (
                    <li key={friend}>
                        <label>
                            <input
                                type="checkbox"
                                checked={friends.includes(friend)}
                                onChange={() => handleSelectFriend(friend)}
                            />
                            {friend}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendsList;
