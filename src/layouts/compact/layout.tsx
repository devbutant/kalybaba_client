import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/nav";
import { DropdownMenuProvider } from "../../contexts/header";

export const CompactLayout: React.FunctionComponent = () => {
    return (
        <>
            <DropdownMenuProvider>
                <Header />
            </DropdownMenuProvider>
            <main>
                <div className="my-4 mx-auto max-w-screen-xl min-h-screen">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </>
    );
};
