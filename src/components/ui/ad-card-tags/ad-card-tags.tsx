import React, { PropsWithChildren } from "react";
import { TagsProps } from "../../../types";
import { Tag } from "../ad-card-tag/ad-card-tag";

const Tags: React.FC<PropsWithChildren<TagsProps>> = (props) => {
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
