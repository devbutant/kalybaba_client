import { useChat } from "@/hooks/contexts-hooks/chat";
import { FC } from "react";

const ChatContent: FC = () => {
    const { messages } = useChat();
    // const { data } = useCheckAuthQuery();
    // const currentUser = data?.user?.id;
    const currentUser = "userid";

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
