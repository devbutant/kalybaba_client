import { Ad } from "../../dtos";

type TagProps = {
    children: React.ReactNode;
    color?: string;
};

type TagsProps = {
    ad: Pick<Ad, "category" | "type">;
    color?: string;
};

export type { TagProps, TagsProps };
