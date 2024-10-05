import { usePreRegisterForm } from "@/hooks/auth/pre-register";
import { Button } from "@/shadcn/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/shadcn/components/ui/form";
import { Input } from "@/shadcn/components/ui/input";
import { FC } from "react";
import { Link } from "react-router-dom";

const PreRegisterForm: FC = () => {
    const { handleSubmit, onFormSubmit, form } = usePreRegisterForm();
    const { formState } = form;
    const { isSubmitting } = formState;

    return (
        <Form {...form}>
            <form className="space-y-2" onSubmit={handleSubmit(onFormSubmit)}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="adrien.petit@exemple.fr"
                                    {...field}
                                    value={field.value || ""}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="div">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-4"
                    >
                        {isSubmitting ? "Chargement..." : "S'inscrire"}
                    </Button>
                </div>

                <p>
                    Déjà membre ?{" "}
                    <Button
                        variant={"link"}
                        className="m-0 p-0 text-md"
                        asChild
                    >
                        <Link to="/connexion">Connectez-vous !</Link>
                    </Button>
                </p>
            </form>
        </Form>
    );
};

PreRegisterForm.displayName = "PreRegisterForm";

export { PreRegisterForm };
