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
import { formFields } from "../edit-ad-form-fields";

const EditAdForm: FC = () => {
    const { singleAdData } = useSingleAd();
    const { singleAd } = singleAdData;

    const { onSubmit, form } = useEditAd(singleAd);

    const { t } = useTranslation();

    return (
        <div className="mx-auto bg-white p-8 shadow-md rounded-lg md:w-[45rem] w-screen ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Modifiez votre annonce
            </h2>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    {formFields.map((field) => (
                        <FormField
                            key={field.name}
                            control={form.control}
                            name={field.name}
                            render={({ field: formField }) => (
                                <FormItem>
                                    <FormLabel>{field.placeholder}</FormLabel>
                                    <FormControl>
                                        <FormControl>
                                            {field.type === "textarea" ? (
                                                <Textarea
                                                    placeholder={
                                                        field.placeholder
                                                    }
                                                    {...formField}
                                                    onChange={(
                                                        e: React.ChangeEvent<
                                                            | HTMLInputElement
                                                            | HTMLTextAreaElement
                                                        >
                                                    ) =>
                                                        formField.onChange(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            ) : (
                                                <Input
                                                    placeholder={
                                                        field.placeholder
                                                    }
                                                    {...formField}
                                                    type={field.type}
                                                    onChange={(e) =>
                                                        formField.onChange(
                                                            field.type ===
                                                                "number"
                                                                ? parseFloat(
                                                                      e.target
                                                                          .value
                                                                  ) || 0
                                                                : e.target.value
                                                        )
                                                    }
                                                />
                                            )}
                                        </FormControl>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}

                    <Select>
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
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez une catégorie" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((category) => (
                                <SelectItem key={category} value={category}>
                                    {t("categoryOrType." + category)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <EditAdButtons />
                </form>
            </Form>
        </div>
    );
};

EditAdForm.displayName = "EditAdForm";

export { EditAdForm };
