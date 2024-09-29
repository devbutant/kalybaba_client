import { useLoginForm } from "@/hooks/auth";
import { Form } from "@/shadcn/components/ui/form";
import { FC } from "react";

import { FormContainer } from "@/components/form/form-container";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/shadcn/components/ui/form";
import { Input } from "@/shadcn/components/ui/input";
import { LoginSubmitButton } from "./submit-button";

const LoginForm: FC = () => {
    const { form, onFormSubmit, errors, isSubmitting } = useLoginForm();

    return (
        <FormContainer title="Bienvenue!" className="md:w-[30rem]">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onFormSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        rules={{ required: "L'identifiant est requis" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Identifiant</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="adrien.petit@exemple.fr"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        rules={{ required: "L'identifiant est requis" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mot de passe</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="********"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <LoginSubmitButton
                        isSubmitting={isSubmitting}
                        errors={errors}
                    />
                </form>
            </Form>
        </FormContainer>
    );
};

LoginForm.displayName = "LoginForm";

export { LoginForm };
