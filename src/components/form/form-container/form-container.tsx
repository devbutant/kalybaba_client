import { Button } from "@/shadcn/components/ui/button";
import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";

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

            <p>
                Toujours pas de compte ?{" "}
                <Button variant={"link"} className="m-0 p-0 text-md" asChild>
                    <Link to="/inscription">Inscrivez-vous</Link>
                </Button>
            </p>
        </div>
    );
};

FormContainer.displayName = "FormContainer";

export { FormContainer };
