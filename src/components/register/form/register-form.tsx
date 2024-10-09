import { useRegisterForm } from "@/hooks/auth/register";
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

const RegisterForm: FC = () => {
    const { handleSubmit, onFormSubmit, form } = useRegisterForm();
    const { formState } = form;
    const { isSubmitting } = formState;

    return (
        <Form {...form}>
            <form className="space-y-2" onSubmit={handleSubmit(onFormSubmit)}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nom</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Adrien"
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

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirmer le mot de passe</FormLabel>
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

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Numéro de téléphone</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="07 00 00 00 00"
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
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ville</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Paris"
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
                        {isSubmitting
                            ? "Chargement..."
                            : "Enregistrer mes informations"}
                    </Button>
                </div>
            </form>
        </Form>
    );
};

RegisterForm.displayName = "RegisterForm";

export { RegisterForm };
