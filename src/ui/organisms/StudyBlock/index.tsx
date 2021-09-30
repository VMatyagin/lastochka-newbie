import { Group, Header, FormItem, Checkbox, Input } from "@vkontakte/vkui";
import { Controller } from "react-hook-form";

export const StudyBlock = () => {
    return (
        <Group header={<Header mode="secondary">О учебе</Header>}>
            <Controller
                name="gasu"
                defaultValue={true}
                render={({ field, fieldState }) => (
                    <>
                        <FormItem
                            status={fieldState.invalid ? "error" : "default"}
                            bottom={
                                fieldState.error && fieldState.error.message
                            }
                        >
                            <Checkbox
                                getRef={field.ref}
                                {...field}
                                checked={field.value}
                            >
                                Я учусь в ГАСУ
                            </Checkbox>
                        </FormItem>
                        {field.value === false && (
                            <Controller
                                name="univercity"
                                rules={{ required: "Заполни, пожалуйста" }}
                                render={({ field, fieldState }) => (
                                    <FormItem
                                        top="Тогда где учишься?"
                                        status={
                                            fieldState.invalid
                                                ? "error"
                                                : "default"
                                        }
                                        bottom={
                                            fieldState.error &&
                                            fieldState.error.message
                                        }
                                    >
                                        <Input
                                            getRef={field.ref}
                                            type="text"
                                            {...field}
                                            placeholder="СПбПУ Петра Великого"
                                        />
                                    </FormItem>
                                )}
                            />
                        )}
                    </>
                )}
            />
        </Group>
    );
};
