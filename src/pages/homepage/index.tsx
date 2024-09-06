import React, { ChangeEvent, useState } from "react";
import io, { Socket } from "socket.io-client";
import { Button } from "../../components/button";
import FriendsList from "../../components/friends/friends-list";
import FriendsSelection from "../../components/friends/friends-selection";
import { useAuth } from "../../contexts/auth.context";

const Homepage: React.FC = () => {
    const [socket, setSocket] = useState<Socket | null>(null); // Socket state
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<
        Array<{ id: string; userId: string; data: string }>
    >([]);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const { token, userId: currentUser, setToken } = useAuth();

    const handleConnect = () => {
        const newSocket = io("http://localhost:3001");

        newSocket.on("connect", () => {
            console.log("Connected to server");

            if (token) {
                newSocket.emit("authenticate", token);
            }
        });

        newSocket.on("message", (id: string, userId: string, data: string) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { id, userId, data },
            ]);
        });

        newSocket.on("authenticated", () => {
            setIsAuthenticated(true);
            console.log("User authenticated");
        });

        newSocket.on("authentication_error", () => {
            setIsAuthenticated(false);
            console.log("Authentication failed");
        });

        setSocket(newSocket); // Set the new socket instance in the state
    };

    const handleSendMsg = () => {
        if (message.trim() && isAuthenticated && socket) {
            socket.emit("message", message);
            setMessage("");
        } else if (!isAuthenticated) {
            console.log("User not authenticated");
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleLogout = () => {
        if (socket) {
            socket.disconnect(); // Disconnect socket
        }
        localStorage.removeItem("access_token"); // Remove token from localStorage
        setToken(null); // Clear token in context
        setIsAuthenticated(false); // Update local state
    };

    if (!socket && token) {
        handleConnect(); // Initialize socket connection and authenticate
    } else if (socket) {
        socket.emit("authenticate", token); // Re-authenticate if socket exists
    }

    return (
        <div className="h-screen py-20">
            <div className="flex flex-col justify-center h-full w-2/5 min-w-[40rem] shadow-md mx-auto">
                {/* Messages container */}

                <div className="flex-1 overflow-auto p-4">
                    <FriendsList />
                    <FriendsSelection />
                    <Button
                        onClick={handleLogout}
                        className="bg-red-500 text-white"
                    >
                        Déconnexion
                    </Button>
                    {/* <h1>{msg.id}</h1> */}
                    <hr className="my-5" />
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`mb-2 flex ${
                                msg.userId === currentUser
                                    ? "justify-end"
                                    : "justify-start"
                            }`}
                        >
                            <div
                                className={`p-2 max-w-xs rounded-lg ${
                                    msg.userId === currentUser
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-300 text-black"
                                }`}
                            >
                                <p className="font-semibold">
                                    {msg.userId === currentUser
                                        ? "Moi"
                                        : msg.id}
                                </p>
                                <p>{msg.data}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message input container */}
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
