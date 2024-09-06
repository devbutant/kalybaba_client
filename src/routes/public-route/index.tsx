// PublicRoute.tsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppAuth } from "../../contexts/app-auth/app-auth.context";

const PublicRoute: React.FC<{ redirectTo: string }> = ({ redirectTo }) => {
    const { isAuthenticated } = useAppAuth();

    if (isAuthenticated) {
        return <Navigate to={redirectTo} replace />;
    }

    return <Outlet />;
};

export default PublicRoute;
