import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AppAuthProvider } from "./contexts/app-auth";
import { SocketAuthProvider } from "./contexts/socket-auth";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <SocketAuthProvider>
            <AppAuthProvider>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </QueryClientProvider>
            </AppAuthProvider>
        </SocketAuthProvider>
    </StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";

// // Créez une instance de QueryClient
// const queryClient = new QueryClient();

// ReactDOM.render(
//     <React.StrictMode>
//         {/* Fournir QueryClient à l'application */}
//         <QueryClientProvider client={queryClient}>
//             <BrowserRouter>
//                 <App />
//             </BrowserRouter>
//         </QueryClientProvider>
//     </React.StrictMode>,
//     document.getElementById("root")
// );
