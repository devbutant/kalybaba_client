import { Badge } from "@/shadcn/components/ui/badge";
import { TagProps } from "@/types";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { colorVariants } from "./ad-card-tag-colors";

const Tag: FC<TagProps> = (props) => {
    const { children, color } = props;
    const { t } = useTranslation();

    return (
        <Badge
            variant="outline"
            className={`${
                colorVariants[color] || colorVariants.gray
            } font-semibold`}
        >
            {t(`categoryOrType.${children}`).toUpperCase()}
        </Badge>
    );
};

Tag.displayName = "Tag";

export { Tag };
