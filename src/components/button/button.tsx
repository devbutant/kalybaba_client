import React from "react";

const Button: React.FC<
    React.PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, className = "", ...props }) => {
    return (
        <button className={`py-2 px-4 rounded ${className}`} {...props}>
            {children}
        </button>
    );
};

Button.displayName = "Button";

export { Button };
