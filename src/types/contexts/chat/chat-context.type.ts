import { Dispatch } from "react";

export interface ChatContextType {
    messages: Array<{ id: string; userId: string; data: string }>;
    setMessages: Dispatch<
        React.SetStateAction<
            Array<{ id: string; userId: string; data: string }>
        >
    >;
}
