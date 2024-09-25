import { useFriends } from "@/hooks/contexts-hooks/friends";

export const useFriendsList = () => {
    const { setFriends } = useFriends();

    const handleSelectFriend = (friendId: string) => {
        setFriends((prevFriends: string[]) => {
            if (prevFriends.includes(friendId)) {
                return prevFriends.filter((id) => id !== friendId);
            } else {
                return [...prevFriends, friendId];
            }
        });
    };

    return { handleSelectFriend };
};
