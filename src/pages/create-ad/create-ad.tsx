import { FormContainer } from "@/components/form/form-container";
import { useCreateAd } from "@/hooks/ad";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shadcn/components/ui/select";
import { Textarea } from "@/shadcn/components/ui/textarea";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const CreateAd: FC = () => {
    const { onFormSubmit, form } = useCreateAd();
    const { handleSubmit, formState } = form;
    const { isSubmitting } = formState;

    const { t } = useTranslation();

    const types = ["OFFER", "DEMAND"];

    const categories = [
        "VEHICLE",
        "REAL_ESTATE",
        "MULTIMEDIA",
        "HOME",
        "LEISURE",
        "FASHION",
        "CHILDREN",
        "ANIMALS",
        "SERVICES",
        "EMPLOYMENT",
        "OTHERS",
    ];

    return (
        <FormContainer title="Déposer une nouvelle annonce">
            <Form {...form}>
                <form
                    onSubmit={handleSubmit(onFormSubmit)}
                    className="space-y-2"
                >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Titre</FormLabel>
                                <FormControl>
                                    <Input placeholder="Titre" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Description"
                                        {...field}
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
                                    <Input placeholder="Ville" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Prix</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="Prix"
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(
                                                Number(e.target.value)
                                            );
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="categoryEnum"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Catégorie</FormLabel>
                                <FormControl>
                                    <Select
                                        name="categoryEnum"
                                        onValueChange={(value) => {
                                            field.onChange(value);
                                        }}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Sélectionnez une catégorie" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {categories.map((category) => (
                                                <SelectItem
                                                    key={category}
                                                    value={category}
                                                >
                                                    {t(
                                                        "categoryOrType." +
                                                            category
                                                    )}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="typeEnum"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Type</FormLabel>
                                <FormControl>
                                    <Select
                                        name="typeEnum"
                                        onValueChange={(value) => {
                                            field.onChange(value);
                                        }}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Sélectionnez un type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {types.map((type) => (
                                                <SelectItem
                                                    key={type}
                                                    value={type}
                                                >
                                                    {t(
                                                        "categoryOrType." + type
                                                    )}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div>
                        <Button type="submit" className="w-full mt-4">
                            {isSubmitting ? (
                                <p>Envoi de l'annonce...</p>
                            ) : (
                                <p>Déposer l'annonce</p>
                            )}
                        </Button>
                    </div>
                </form>
            </Form>
        </FormContainer>
    );
};

CreateAd.displayName = "CreateAd";

export { CreateAd };
