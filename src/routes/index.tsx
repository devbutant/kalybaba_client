import { useCheckAuthQuery } from "@/api/queries/auth/check-auth/check-auth.query";
import { EditAdForm } from "@/components/ad/edit-ad-form/edit-ad-form";
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
    const { data, isLoading } = useCheckAuthQuery();

    if (!data) {
        <Navigate to="/connexion" />;
    }

    if (isLoading) {
        return <h1>PRIVATE ROUTE LOADING</h1>;
    }

    const isAuthorized = data?.user?.role === "USER";

    return isAuthorized ? <>{element}</> : <Navigate to="/connexion" replace />;
};

const PreRegistedGuard: FC<{ element: ReactNode }> = ({ element }) => {
    const { data, isLoading } = useCheckAuthQuery();

    if (!data) {
        <Navigate to="/connexion" />;
    }

    if (isLoading) {
        return <h1>PRE REGISTERED ROUTE LOADING</h1>;
    }

    const isPreRegistered = data?.user.role === "USER_PENDING";
    return isPreRegistered ? <>{element}</> : <Navigate to="/" replace />;
};

const PublicGuard: FC<{ element: ReactNode }> = ({ element }) => {
    const { data, isLoading } = useCheckAuthQuery();

    if (isLoading) {
        return <h1>PUBLIC ROUTE LOADING</h1>;
    }

    const isAuthorized = !data;

    return isAuthorized ? (
        <>{element}</>
    ) : (
        <Navigate to="/derniere-etape" replace />
    );
};

export function Router() {
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
        {
            path: "/confirmation-email/:token?",
            element: <PublicGuard element={<ConfirmEmail />} />,
        },
        { path: "/*", element: <Navigate to="/404" replace /> },
    ]);
}
