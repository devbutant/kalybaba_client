import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import i18n from "./config/i18n/i18n.ts";
import { CombinedAuthProvider } from "./contexts/auth";
import { CombinedChatProvider } from "./contexts/chat";
import "./index.css";
console.log(i18n.language);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <CombinedAuthProvider>
                <BrowserRouter>
                    <CombinedChatProvider>
                        <App />
                    </CombinedChatProvider>
                </BrowserRouter>
            </CombinedAuthProvider>
        </QueryClientProvider>
    </StrictMode>
);
