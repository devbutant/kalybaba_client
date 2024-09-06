import React from "react";
import { useAppAuth } from "../../../hooks/auth/app";
import { useChat } from "../../../hooks/chat";

const ChatContent: React.FC = () => {
    const { messages } = useChat();
    const { userId: currentUser } = useAppAuth();

    return (
        <>
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
                            {msg.userId === currentUser ? "Moi" : msg.id}
                        </p>
                        <p>{msg.data}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

ChatContent.displayName = "ChatContent";

export { ChatContent };
