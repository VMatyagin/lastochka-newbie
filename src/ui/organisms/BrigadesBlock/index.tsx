import { Group, Header, FormItem, Input } from "@vkontakte/vkui";
import { Controller } from "react-hook-form";

export const BrigadesBlock = () => {
    return (
        <Group header={<Header mode="secondary">Отряды ❤️</Header>}>
            <Controller
                name="year"
                rules={{ required: "Заполни, пожалуйста" }}
                render={({ field, fieldState }) => (
                    <FormItem
                        top="С какого года в отрядах?"
                        status={fieldState.invalid ? "error" : "default"}
                        bottom={fieldState.error && fieldState.error.message}
                    >
                        <Input
                            getRef={field.ref}
                            type="text"
                            {...field}
                            placeholder="1948"
                        />
                    </FormItem>
                )}
            />
            <Controller
                name="brigade"
                rules={{ required: "Заполни, пожалуйста" }}
                render={({ field, fieldState }) => (
                    <FormItem
                        top="Твой отряд сейчас"
                        status={fieldState.invalid ? "error" : "default"}
                        bottom={fieldState.error && fieldState.error.message}
                    >
                        <Input getRef={field.ref} type="text" {...field} />
                    </FormItem>
                )}
            />
            <Controller
                name="brigade"
                rules={{ required: "Заполни, пожалуйста" }}
                render={({ field, fieldState }) => (
                    <FormItem
                        top="Давай, похвастайся количеством кирпичей"
                        status={fieldState.invalid ? "error" : "default"}
                        bottom={
                            fieldState.error
                                ? fieldState.error.message
                                : "Мы знаем, ты супер!"
                        }
                    >
                        <Input getRef={field.ref} type="text" {...field} />
                    </FormItem>
                )}
            />
        </Group>
    );
};
