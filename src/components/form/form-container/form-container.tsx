import { FC, PropsWithChildren } from "react";

type FormProps = PropsWithChildren<{
    title: string;
    className?: string;
}>;

const FormContainer: FC<PropsWithChildren & FormProps> = (props) => {
    const { children, title, className } = props;

    return (
        <div
            className={`mx-2 md:mx-auto bg-white p-4 md:p-8 md:shadow-md rounded-lg md:w-[45rem] w-screen ${className} `}
        >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                {title}
            </h2>

            {children}
        </div>
    );
};

FormContainer.displayName = "FormContainer";

export { FormContainer };
