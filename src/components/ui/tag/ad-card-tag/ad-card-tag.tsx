import { TagProps } from "@/types";
import { FC } from "react";
import { colorVariants } from "./ad-card-tag-colors";

const Tag: FC<TagProps> = (props) => {
    const { children, color } = props;

    return (
        <div
            className={`${
                colorVariants[color] || colorVariants.gray
            } text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`}
        >
            {children}
        </div>
    );
};

Tag.displayName = "Tag";

export { Tag };
