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

const PrivateRoute: FC<{ element: ReactNode }> = ({ element }) => {
    const isAuthorized = false;
    // const isAuthorized = user?.roles?.includes("USER") ?? false;
    return isAuthorized ? <>{element}</> : <Navigate to="/connexion" replace />;
};

const PublicRoute: FC<{ element: ReactNode }> = ({ element }) => {
    const isAuthenticated = false;

    return !isAuthenticated ? (
        <>{element}</>
    ) : (
        <Navigate to="/derniere-etape" replace />
    );
};

const PreRegistedGuard: FC<{ element: ReactNode }> = ({ element }) => {
    // const isPreRegistered = user?.roles?.includes("USER_PENDING") ?? false;
    const isPreRegistered = false;
    return isPreRegistered ? <>{element}</> : <Navigate to="/" replace />;
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
            element: <PublicRoute element={<Login />} />,
        },
        {
            path: "/inscription",
            element: <PublicRoute element={<CreateAccount />} />,
        },
        {
            path: "/confirmation-email/:token?",
            element: <PublicRoute element={<ConfirmEmail />} />,
        },
        { path: "/*", element: <Navigate to="/404" replace /> },
    ]);
}
