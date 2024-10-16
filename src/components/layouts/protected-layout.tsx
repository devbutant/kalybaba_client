import { Outlet } from "react-router-dom";

export function ProtectedLayout() {
    // const { data: user } = useAdListQuery();
    // console.log(user, "  kkkk");
    console.log("ProtectedLayout");

    //   if (!user) {
    //     return <Navigate to="/" />;
    //   }

    //   if (loading) {
    //     return <LoadingScreen />;
    //   }

    return <Outlet />;
}
