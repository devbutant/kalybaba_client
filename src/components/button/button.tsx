import { Button as ShadCnButton } from "@/shadcn/components/ui/button";
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

const Button: FC<
    PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, className = "", ...props }) => {
    return (
        <ShadCnButton className={` ${className}`} {...props}>
            {children}
        </ShadCnButton>
    );
};

Button.displayName = "Button";

export { Button };
