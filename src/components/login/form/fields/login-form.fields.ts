import { LoginFormFields } from "../../../../types";

export const fields: {
    name: keyof LoginFormFields;
    type: string;
    placeholder: string;
}[] = [
    { name: "email", type: "text", placeholder: "Email" },
    { name: "password", type: "password", placeholder: "Password" },
];
