import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

export const CompactLayout: React.FunctionComponent = () => {
    return (
        <>
            <Header />

            <main>
                <div className="my-4 mx-auto max-w-screen-xl min-h-screen">
                    <Outlet />
                </div>
            </main>

            <Footer />
        </>
    );
};
