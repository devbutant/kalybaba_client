import React from "react";
import { TagProps } from "../../../types";

const Tag: React.FC<TagProps> = (props) => {
    const { children, color = "blue" } = props; // Définir une couleur par défaut

    const bgColorClass = `bg-${color}-100`;
    const textColorClass = `text-${color}-800`;

    return (
        <span
            className={`${bgColorClass} ${textColorClass} text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`}
        >
            {children}
        </span>
    );
};

Tag.displayName = "Tag";

export { Tag };
