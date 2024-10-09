import { Button } from "@/components/button";
import { ChatContent } from "@/components/chat";
import { FriendsList } from "@/components/chat/friends/friends-list";
import { FriendsSelection } from "@/components/chat/friends/friends-selection";
import { useSocketAuth } from "@/hooks/contexts-hooks/auth";
import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import { useMessages } from "@/hooks/messages";
import { useSocket } from "@/hooks/socket";
import { ChangeEvent, FC, useEffect, useState } from "react";

const Chat: FC = () => {
    const [message, setMessage] = useState<string>("");
    const { user } = useAppAuth();
    const { connectSocket } = useSocket();
    const { isSocketAuthenticated } = useSocketAuth();
    const { sendMessage, listenToMessages } = useMessages();

    const currentUser = user?.userId ?? null;

    useEffect(() => {
        if (currentUser) {
            connectSocket();
            listenToMessages();
        }
    }, [currentUser, connectSocket]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleSendMsg = () => {
        sendMessage(message, isSocketAuthenticated);
        setMessage("");
    };

    return (
        <div className="flex flex-col justify-center h-full w-2/5 min-w-[40rem] shadow-md mx-auto">
            <div className="flex-1 overflow-auto p-4">
                <FriendsList />
                <FriendsSelection />

                <hr className="my-5" />
                <ChatContent />
            </div>

            <div className="p-4 border-t border-gray-200 bg-white flex items-center">
                <input
                    type="text"
                    value={message}
                    onChange={handleChange}
                    placeholder="Ecrire un nouveau message"
                    className="border p-2 flex-1 rounded-lg mr-2"
                />
                <Button
                    onClick={handleSendMsg}
                    className="bg-indigo-700 hover:bg-indigo-800 focus:ring-2 focus:ring-opacity-50"
                >
                    Envoyer
                </Button>
            </div>
        </div>
    );
};

Chat.displayName = "Chat";

export { Chat };
