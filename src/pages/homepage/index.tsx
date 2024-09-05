import React, { ChangeEvent, useState } from "react";
import io, { Socket } from "socket.io-client";
import { Button } from "../../components/button";
import { useAuth } from "../../contexts/auth.context";

const Homepage: React.FC = () => {
    const [socket, setSocket] = useState<Socket | null>(null); // Socket state
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<
        Array<{ id: string; data: string }>
    >([]);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const { isAuthenticated: isAuthCtxt, token, setToken } = useAuth();

    const handleConnect = () => {
        const newSocket = io("http://localhost:3001");

        newSocket.on("connect", () => {
            console.log("Connected to server");

            if (token) {
                newSocket.emit("authenticate", token);
            }
        });

        newSocket.on("message", (id: string, data: string) => {
            setMessages((prevMessages) => [...prevMessages, { id, data }]);
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
        <div className="p-4">
            <h1>{isAuthCtxt.toString()}</h1>
            <input
                type="text"
                value={message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="border p-2 mr-2"
            />
            <Button
                onClick={handleSendMsg}
                className={`bg-blue-500 text-white`}
            >
                Envoyer
            </Button>

            <Button
                onClick={handleLogout}
                className={`bg-red-500 text-white mt-4`}
            >
                Déconnexion
            </Button>

            <div className="mt-4">
                {messages.map((msg, index) => (
                    <p key={index} className="mb-2">
                        <b>{msg.id}</b>: {msg.data}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Homepage;
