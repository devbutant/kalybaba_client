import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/nav";
import { DropdownMenuProvider } from "../../contexts/header";

export const CompactLayout: React.FunctionComponent = () => {
    return (
        <div className="min-h-screen flex flex-1 flex-col">
            <DropdownMenuProvider>
                <Header />
            </DropdownMenuProvider>
            <main className="my-4 flex-grow mx-auto max-w-screen-xl">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};
