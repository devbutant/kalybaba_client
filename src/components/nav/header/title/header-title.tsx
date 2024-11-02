import { FC } from "react";
import { NavLink } from "react-router-dom";

const HeaderTitle: FC = () => {
    return (
        <NavLink to="/" className="flex items-center">
            <h1 className="text-center text-2xl font-bold">ShareMySetup</h1>
        </NavLink>
    );
};

export { HeaderTitle };
