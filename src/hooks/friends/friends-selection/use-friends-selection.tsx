import { useState } from "react";
import { useFriends } from "../../contexts-hooks/friends";
import { useOutsideClick } from "./use-outside-click";

export const useFriendsSelection = () => {
    const { setFriends } = useFriends();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const containerRef = useOutsideClick(() => setIsOpen(false));

    const handleSelectUser = (userId: string) => {
        setFriends((prevFriends) => {
            if (prevFriends.includes(userId)) {
                return prevFriends.filter((id) => id !== userId);
            } else {
                return [...prevFriends, userId];
            }
        });
    };
    return { handleSelectUser, isOpen, setIsOpen, containerRef };
};
