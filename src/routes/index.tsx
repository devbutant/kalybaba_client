// Router.tsx
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useAppAuth } from "../hooks/auth/app";
import { Homepage } from "../pages/homepage";
import { Login } from "../pages/login";
import { Register } from "../pages/register/register";

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
            element: <PrivateRoute element={<Homepage />} />,
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
