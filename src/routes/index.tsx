import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { EditAdForm } from "../components/ad/edit-ad-form";
import { SingleAdProvider } from "../contexts/ad";
import { useAppAuth } from "../hooks/contexts-hooks/auth/app";
import { CompactLayout } from "../layouts/compact";
import { Chat } from "../pages/chat";
import { CreateAd } from "../pages/create-ad";
import { Homepage } from "../pages/homepage";
import { Login } from "../pages/login";
import { MyAdList } from "../pages/my-ad-list";
import { Register } from "../pages/register/register";
import { SingleAdPage } from "../pages/single-ad";

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
                {
                    path: "/annonces/:id",
                    element: (
                        <SingleAdProvider>
                            <SingleAdPage />
                        </SingleAdProvider>
                    ),
                },
                {
                    path: "/annonces/modification/:id",
                    element: (
                        <SingleAdProvider>
                            <EditAdForm />
                        </SingleAdProvider>
                    ),
                },
                { path: "/mes-annonces", element: <MyAdList /> },
                {
                    path: "/deposer-une-annonce",
                    element: <CreateAd />,
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
