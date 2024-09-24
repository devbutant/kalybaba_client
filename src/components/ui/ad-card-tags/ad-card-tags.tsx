import React, { PropsWithChildren } from "react";
import { TagsProps } from "../../../types";
import { Tag } from "../ad-card-tag/ad-card-tag";

const Tags: React.FC<PropsWithChildren<TagsProps>> = (props) => {
    const { ad } = props;

    return (
        <div className="flex space-x-1 mb-2">
            <Tag color="blue">{ad.type.name}</Tag>
            <Tag color="green">{ad.category.name}</Tag>
        </div>
    );
};

Tags.displayName = "Tags";

export { Tags };
