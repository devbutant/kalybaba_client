import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { CombinedAuthProvider } from "./contexts/auth/combined-auth";
import { CombinedChatProvider } from "./contexts/chat/combined-chat";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CombinedAuthProvider>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <CombinedChatProvider>
                        <App />
                    </CombinedChatProvider>
                </BrowserRouter>
            </QueryClientProvider>
        </CombinedAuthProvider>
    </StrictMode>
);
