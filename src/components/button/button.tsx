import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

const Button: FC<
    PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, className = "", ...props }) => {
    return (
        <button className={`py-2 px-4 rounded ${className}`} {...props}>
            {children}
        </button>
    );
};

Button.displayName = "Button";

export { Button };
