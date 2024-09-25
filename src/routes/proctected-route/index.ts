// ProtectedRoute.tsx
import { useAppAuth } from "@/hooks/contexts-hooks/auth/app";
import React from "react";

const ProtectedRoute: React.FC<{ redirectTo: string }> = ({ redirectTo }) => {
    const { isAuthenticated } = useAppAuth();

    if (!isAuthenticated) {
        return <Navigate to={redirectTo} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
