import { TagsProps } from "@/types";
import { FC, PropsWithChildren } from "react";
import { Tag } from "../ad-card-tag";

const Tags: FC<PropsWithChildren<TagsProps>> = (props) => {
    const { typeEnum, categoryEnum } = props;

    return (
        <div className="flex space-x-1 mb-2">
            <Tag color="blue">{typeEnum}</Tag>
            <Tag color="green">{categoryEnum}</Tag>
        </div>
    );
};

Tags.displayName = "Tags";

export { Tags };
