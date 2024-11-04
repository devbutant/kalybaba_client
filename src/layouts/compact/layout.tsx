import { Footer } from "@/components/footer";
import { Header } from "@/components/nav";
import { DropdownMenuProvider } from "@/contexts/header";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const CompactLayout: FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <DropdownMenuProvider>
                <Header />
            </DropdownMenuProvider>
            <main className="max-w-screen-xl my-4 mx-auto w-full sm:flex items-center justify-center flex-col flex-1 flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
