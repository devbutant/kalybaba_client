import { EditAdForm } from "@/components/ad/edit-ad-form/edit-ad-form";
import { useAppAuth } from "@/hooks/contexts-hooks/auth/app-auth/use-auth.hook";
import { CompactLayout } from "@/layouts/compact";
import { Chat } from "@/pages/chat";
import { ConfirmEmail } from "@/pages/confirm-email";
import { CreateAd } from "@/pages/create-ad";
import { Homepage } from "@/pages/homepage";
import { Login } from "@/pages/login";
import { MyAdList } from "@/pages/my-ad-list";
import { Register } from "@/pages/register/register";
import { SingleAdPage } from "@/pages/single-ad";
import { FC, ReactNode } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { CreateAccount } from "../pages/create-account";

const PrivateGuard: FC<{ element: ReactNode }> = ({ element }) => {
    const { authData } = useAppAuth();

    if (!authData) {
        return <Navigate to="/connexion" replace />;
    }

    return authData?.user.role === "USER" ? (
        <>{element}</>
    ) : (
        <Navigate to="/derniere-etape" replace />
    );
};

const PreRegistedGuard: FC<{ element: ReactNode }> = ({ element }) => {
    const { authData } = useAppAuth();

    return authData?.isAuthenticated &&
        authData.user.role === "USER_PENDING" ? (
        <>{element}</>
    ) : (
        <Navigate to="/" replace />
    );
};

const PublicGuard: FC<{ element: ReactNode }> = ({ element }) => {
    const { authData } = useAppAuth();
    console.log("authData: ", authData);

    return !authData ? <>{element}</> : <Navigate to="/" replace />;
};

export const Router: FC = () => {
    return useRoutes([
        {
            path: "/",
            element: <PrivateGuard element={<CompactLayout />} />,
            children: [
                { path: "/", element: <Homepage /> },
                { path: "/chat", element: <Chat /> },
                {
                    path: "/annonces/:id",
                    element: <SingleAdPage />,
                },
                {
                    path: "/annonces/modification/:id",
                    element: <EditAdForm />,
                },
                { path: "/mes-annonces", element: <MyAdList /> },
                {
                    path: "/deposer-une-annonce",
                    element: <CreateAd />,
                },
            ],
        },
        {
            path: "/confirmation-email/:token?",
            element: <PublicGuard element={<ConfirmEmail />} />,
        },
        {
            path: "/derniere-etape",
            element: <PreRegistedGuard element={<Register />} />,
        },
        {
            path: "/connexion",
            element: <PublicGuard element={<Login />} />,
        },
        {
            path: "/inscription",
            element: <PublicGuard element={<CreateAccount />} />,
        },

        { path: "/*", element: <Navigate to="/404" replace /> },
    ]);
};
