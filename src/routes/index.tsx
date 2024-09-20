import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useAppAuth } from "../hooks/contexts-hooks/auth/app";
import { CompactLayout } from "../layouts/compact";
import { Chat } from "../pages/chat";
import { CreateAdd } from "../pages/create-ad";
import { Homepage } from "../pages/homepage";
import { Login } from "../pages/login";
import { MyAds } from "../pages/my-ads";
import { Register } from "../pages/register/register";
import { SingleAd } from "../pages/single-ad";

const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    const { isAuthenticated } = useAppAuth();
    return isAuthenticated ? (
        <>{element}</>
    ) : (
        <Navigate to="/connexion" replace />
    );
};

const PublicRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    const { isAuthenticated } = useAppAuth();
    return !isAuthenticated ? <>{element}</> : <Navigate to="/" replace />;
};

export function Router() {
    return useRoutes([
        {
            path: "/",
            element: <PrivateRoute element={<CompactLayout />} />,
            children: [
                { path: "/", element: <Homepage /> },
                { path: "/chat", element: <Chat /> },
                { path: "/mes-annonces", element: <MyAds /> },
                { path: "/ads/:id", element: <SingleAd /> },
                {
                    path: "/deposer-une-annonce",
                    element: <CreateAdd />,
                },
            ],
        },
        {
            path: "/connexion",
            element: <PublicRoute element={<Login />} />,
        },
        {
            path: "/inscription",
            element: <PublicRoute element={<Register />} />,
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}
