// Router.tsx
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";
import Homepage from "../pages/homepage";
import Login from "../pages/login";
import Register from "../pages/register";

const PrivateRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? (
        <>{element}</>
    ) : (
        <Navigate to="/connexion" replace />
    );
};

const PublicRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    const { isAuthenticated } = useAuth();
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
        // Page 404
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}
