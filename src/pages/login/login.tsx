import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useLoginMutation } from "../../api/mutations/auth/login.mutation";
import { Button } from "../../components/button";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(4),
});

// infer permet de déduire le type d'un schéma Zod.
type FormFields = z.infer<typeof schema>;

const Login: React.FC = () => {
    const form = useForm<FormFields>({
        resolver: zodResolver(schema),
    });
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = form;

    const authenticatationMutation = useLoginMutation();

    const onFormSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            authenticatationMutation.mutate(data);
        } catch (error: unknown) {
            setError("root", {
                type: "manual",
                message:
                    error instanceof Error
                        ? error.message
                        : "An error occurred",
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
                    Connexion
                </h1>

                <form
                    className="space-y-4"
                    onSubmit={handleSubmit(onFormSubmit)}
                >
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Mail
                        </label>
                        <input
                            {...register("email")}
                            type="text"
                            placeholder="Email"
                            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.email && (
                            <p className="text-red-700 text-sm">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Mot de passe
                        </label>
                        <input
                            {...register("password")}
                            type="password"
                            placeholder="Password"
                            className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {errors.password && (
                            <p className="text-red-700 text-sm">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Se souvenir de moi
                            </label>
                        </div>
                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Mot de passe oublié ?
                            </a>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        className="mt-2 w-full bg-indigo-600 text-white shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Loading..." : "Connexion"}
                    </Button>
                    {errors.root && (
                        <p className="text-red-700 text-sm">
                            {errors.root.message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

Login.displayName = "Login";

export { Login };
