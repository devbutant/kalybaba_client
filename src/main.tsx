import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { CombinedAuthProvider } from "./contexts/auth/combined-auth";
import { ChatProvider } from "./contexts/chat";
import { FriendsProvider } from "./contexts/friends/friends.context.tsx";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CombinedAuthProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <ChatProvider>
                        <FriendsProvider>
                            <App />
                        </FriendsProvider>
                    </ChatProvider>
                </BrowserRouter>
            </QueryClientProvider>
        </CombinedAuthProvider>
    </StrictMode>
);
