import { ReactNode } from "react";

type TagProps = {
    children: ReactNode;
    color: string;
};

type TagsProps = {
    typeEnum: string;
    categoryEnum: string;
};

export type { TagProps, TagsProps };
