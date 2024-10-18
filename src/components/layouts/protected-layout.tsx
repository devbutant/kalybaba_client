import { useAdListQuery } from "@/api/queries/ads/ad-list";
import { Navigate, Outlet } from "react-router-dom";
import { SplashScreen } from "../loading";

export function ProtectedLayout() {
    const { data: user, isLoading } = useAdListQuery();
    console.log(user, "  kkkk");
    console.log("ProtectedLayout");

    if (!user) {
        return <Navigate to="/" />;
    }

    if (isLoading) {
        return <SplashScreen />;
    }

    return <Outlet />;
}
