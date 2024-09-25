import { Dispatch, SetStateAction } from "react";

export interface ChatContextType {
    messages: Array<{ id: string; userId: string; data: string }>;
    setMessages: Dispatch<
        SetStateAction<Array<{ id: string; userId: string; data: string }>>
    >;
}
