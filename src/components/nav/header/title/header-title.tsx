import React from "react";
import { NavLink } from "react-router-dom";

const HeaderTitle: React.FC = () => {
    return (
        <NavLink to="/" className="flex items-center">
            <h1 className="text-center text-3xl font-bold">yadetout</h1>
        </NavLink>
    );
};

export { HeaderTitle };
