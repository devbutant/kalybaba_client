import { useSingleAd } from "@/hooks/ad";
import { useEditAd } from "@/hooks/ad/update";
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
import { categories } from "@/types/enums/category";
import { types } from "@/types/enums/types";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { EditAdButtons } from "../edit-ad-form-buttons";
import { EditAdFormContainer } from "../edit-ad-form-container";

const EditAdForm: FC = () => {
    const { singleAdData } = useSingleAd();
    const { singleAd } = singleAdData;

    const { onSubmit, form } = useEditAd(singleAd);

    const { t } = useTranslation();

    return (
        <EditAdFormContainer>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <FormField
                        key="title"
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Titre</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Titre"
                                        {...field}
                                        onChange={(e) =>
                                            field.onChange(e.target.value)
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        key="description"
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Titre"
                                        {...field}
                                        onChange={(e) =>
                                            field.onChange(e.target.value)
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        key="city"
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ville</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Ville"
                                        {...field}
                                        onChange={(e) =>
                                            field.onChange(e.target.value)
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        key="price"
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Prix</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Prix"
                                        {...field}
                                        type="number"
                                        onChange={(e) =>
                                            field.onChange(
                                                parseFloat(e.target.value)
                                            )
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormItem>
                        <FormLabel>Type</FormLabel>
                        <FormControl>
                            <Select
                                defaultValue={singleAd?.typeEnum}
                                name="typeEnum"
                                onValueChange={(value) => {
                                    form.setValue("typeEnum", value);
                                }}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Sélectionnez un type" />
                                </SelectTrigger>
                                <SelectContent>
                                    {types.map((type) => (
                                        <SelectItem key={type} value={type}>
                                            {t("categoryOrType." + type)}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormControl>
                    </FormItem>

                    <FormItem>
                        <FormLabel>Catégorie</FormLabel>
                        <FormControl>
                            <Select
                                defaultValue={singleAd?.categoryEnum}
                                name="categoryEnum"
                                onValueChange={(value) => {
                                    form.setValue("categoryEnum", value);
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
                                            {t("categoryOrType." + category)}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormControl>
                    </FormItem>
                    <EditAdButtons />
                </form>
            </Form>
        </EditAdFormContainer>
    );
};

EditAdForm.displayName = "EditAdForm";

export { EditAdForm };
