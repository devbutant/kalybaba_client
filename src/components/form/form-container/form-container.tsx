import { FC, PropsWithChildren } from "react";

type FormProps = PropsWithChildren<{
    title: string;
    className?: string;
}>;

const FormContainer: FC<PropsWithChildren & FormProps> = (props) => {
    const { children, title, className } = props;

    return (
        <div
            className={`md:mx-auto bg-white p-4 sm:p-8 sm:shadow-md rounded-lg sm:w-[30rem] w-screen ${className} `}
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
