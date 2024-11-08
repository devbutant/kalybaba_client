import { useLoginForm } from "@/hooks/auth";
import { Button } from "@/shadcn/components/ui/button";
import { Form } from "@/shadcn/components/ui/form";
import { FC } from "react";
import { Link } from "react-router-dom";

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
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onFormSubmit)}
                className="space-y-2"
                autoComplete="off"
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Identifiant</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="adrien.petit@exemple.fr"
                                    {...field}
                                    value={field.value || ""}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mot de passe</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="********"
                                    {...field}
                                    value={field.value || ""}
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

                <p>
                    Toujours pas de compte ?{" "}
                    <Button
                        variant={"link"}
                        className="m-0 p-0 text-md"
                        asChild
                    >
                        <Link to="/inscription">Devenez membre !</Link>
                    </Button>
                </p>
            </form>
        </Form>
    );
};

LoginForm.displayName = "LoginForm";

export { LoginForm };
