import { ReactNode } from "react";

type TagProps = {
    children: ReactNode;
    color: string;
};

type TagsProps = {
    typeEnum: string | undefined;
    categoryEnum: string | undefined;
    className?: string;
};

export type { TagProps, TagsProps };
