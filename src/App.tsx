import React, { ChangeEvent, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:3001");

const App: React.FC = () => {
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<
        Array<{ id: string; data: string }>
    >([]);
    const [authToken, setAuthToken] = useState<string>("");
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected to server");

            // Authenticate once connected
            if (authToken) {
                socket.emit("authenticate", authToken);
            }
        });

        socket.on("message", (id: string, data: string) => {
            setMessages((prevMessages) => [...prevMessages, { id, data }]);
        });

        socket.on("authenticated", () => {
            setIsAuthenticated(true);
            console.log("User authenticated");
        });

        socket.on("authentication_error", () => {
            setIsAuthenticated(false);
            console.log("Authentication failed");
        });

        return () => {
            socket.off("connect");
            socket.off("message");
            socket.off("authenticated");
            socket.off("authentication_error");
        };
    }, [authToken]);

    const handleSendMsg = () => {
        if (message.trim() && isAuthenticated) {
            socket.emit("message", message);
            setMessage("");
        } else if (!isAuthenticated) {
            console.log("User not authenticated");
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleAuthTokenChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAuthToken(event.target.value);
    };

    const handleAuthenticate = () => {
        if (authToken) {
            socket.emit("authenticate", authToken);
        }
    };

    return (
        <div className="p-4">
            <input
                type="text"
                value={authToken}
                onChange={handleAuthTokenChange}
                placeholder="Enter authentication token"
                className="border p-2 mb-2"
            />
            <button
                onClick={handleAuthenticate}
                className="bg-green-500 text-white px-4 py-2 mb-4"
            >
                Authenticate
            </button>
            <input
                type="text"
                value={message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="border p-2 mr-2"
            />
            <button
                onClick={handleSendMsg}
                className="bg-blue-500 text-white px-4 py-2"
            >
                Envoyer
            </button>
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

export default App;
