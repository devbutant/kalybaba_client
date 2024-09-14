import React from "react";
import { NavLink } from "react-router-dom";
import chatSvg from "../../../../../../public/img/icons/chat.svg";

const ChatButton: React.FC = () => (
    <NavLink
        to="/chat"
        type="button"
        className="relative flex items-center justify-center rounded-full p-1 focus:outline-none"
    >
        <div className="h-8 w-8 flex items-center justify-center">
            <img src={chatSvg} alt="Chat" />
        </div>
    </NavLink>
);

export { ChatButton };
