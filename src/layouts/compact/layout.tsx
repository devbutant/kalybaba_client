import { Footer } from "@/components/footer";
import { Header } from "@/components/nav";
import { DropdownMenuProvider } from "@/contexts/header";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const CompactLayout: FC = () => {
    return (
        <div className="min-h-screen flex flex-1 flex-col bg-gray-100">
            <DropdownMenuProvider>
                <Header />
            </DropdownMenuProvider>
            <main className="my-4 flex-grow max-w-screen-xl mx-2 sm:mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
