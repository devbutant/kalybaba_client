import { ReactNode } from "react";

type TagProps = {
    children: ReactNode;
    color: string;
};

type TagsProps = {
    typeEnum: string | undefined;
    categoryEnum: string | undefined;
};

export type { TagProps, TagsProps };
