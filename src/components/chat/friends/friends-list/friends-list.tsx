import React from "react";
import { useFriends } from "../../../../hooks/contexts-hooks/friends";
import { useFriendsList } from "../../../../hooks/friends/friends-list";

const FriendsList: React.FC = () => {
    const { friends } = useFriends();
    const { handleSelectFriend } = useFriendsList();

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

FriendsList.displayName = "FriendsList";

export { FriendsList };
