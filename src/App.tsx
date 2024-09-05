// src/App.tsx
import React, { ChangeEvent, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const socket: Socket = io("http://localhost:3001");

const App: React.FC = () => {
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<
        Array<{ id: string; data: string }>
    >([]);

    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected to server");
        });

        socket.on("message", (id: string, data: string) => {
            setMessages((prevMessages) => [...prevMessages, { id, data }]);
        });

        return () => {
            socket.off("connect");
            socket.off("message");
        };
    }, []);

    const handleSendMsg = () => {
        if (message.trim()) {
            socket.emit("message", message);
            setMessage("");
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    return (
        <div className="p-4">
            <input
                type="text"
                value={message}
                onChange={handleChange}
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
