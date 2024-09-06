// PublicRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppAuth } from "../../hooks/auth/app";

const PublicRoute: React.FC<{ redirectTo: string }> = ({ redirectTo }) => {
    const { isAuthenticated } = useAppAuth();

    if (isAuthenticated) {
        return <Navigate to={redirectTo} replace />;
    }

    return <Outlet />;
};

export default PublicRoute;
