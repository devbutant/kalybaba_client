import React from "react";
import { UserAdList } from "../user-ad-list";

const MyAdList: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex flex-col flex-1">
                <h2 className="text-2xl font-semibold mb-6">Mes annonces</h2>
                <UserAdList />
            </main>
        </div>
    );
};

MyAdList.displayName = "MyAdList";

export { MyAdList };
