import { FC, PropsWithChildren } from "react";

const EditAdFormContainer: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    return (
        <div className="mx-auto bg-white p-4 md:p-8 md:shadow-md rounded-lg md:w-[45rem] w-screen ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Modifiez votre annonce
            </h2>

            {children}
        </div>
    );
};

EditAdFormContainer.displayName = "EditAdFormContainer";

export { EditAdFormContainer };
