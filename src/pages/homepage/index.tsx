import React, { ChangeEvent, useEffect, useState } from "react";
import { Button } from "../../components/button";
import { ChatContent } from "../../components/chat/chat-content";
import FriendsList from "../../components/friends/friends-list";
import FriendsSelection from "../../components/friends/friends-selection";
import { useAppAuth } from "../../hooks/auth/app/use-app-auth";
import { useSocketAuth } from "../../hooks/auth/socket/use-socket-auth";
import { useMessages } from "../../hooks/messages";
import { useSocket } from "../../hooks/socket";

const Homepage: React.FC = () => {
    const [message, setMessage] = useState<string>("");
    const { userId: currentUser, setToken } = useAppAuth();
    const { connectSocket, disconnectSocket } = useSocket();
    const { isSocketAuthenticated } = useSocketAuth();
    const { sendMessage, listenToMessages, stopListeningToMessages } =
        useMessages();

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

    const handleLogout = () => {
        disconnectSocket();
        stopListeningToMessages();
        localStorage.removeItem("access_token");
        setToken(null);
    };

    return (
        <div className="h-screen py-20">
            <div className="flex flex-col justify-center h-full w-2/5 min-w-[40rem] shadow-md mx-auto">
                <div className="flex-1 overflow-auto p-4">
                    <FriendsList />
                    <FriendsSelection />
                    <Button
                        onClick={handleLogout}
                        className="bg-red-500 text-white"
                    >
                        Déconnexion
                    </Button>

                    <hr className="my-5" />
                    <ChatContent />
                </div>

                <div className="p-4 border-t border-gray-200 bg-white flex items-center">
                    <input
                        type="text"
                        value={message}
                        onChange={handleChange}
                        placeholder="Enter your message"
                        className="border p-2 flex-1 rounded-lg mr-2"
                    />
                    <Button
                        onClick={handleSendMsg}
                        className="bg-blue-500 text-white"
                    >
                        Envoyer
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
