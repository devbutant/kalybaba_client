import { Badge } from "@/shadcn/components/ui/badge";
import { TagProps } from "@/types";
import { FC } from "react";
import { colorVariants } from "./ad-card-tag-colors";

const Tag: FC<TagProps> = (props) => {
    const { children, color } = props;

    return (
        <Badge
            variant="outline"
            className={`${
                colorVariants[color] || colorVariants.gray
            } font-semibold`}
        >
            {children}
        </Badge>
    );
};

Tag.displayName = "Tag";

export { Tag };
