import {
    Group,
    Header,
    Div,
    FormItem,
    Select,
    Textarea,
    Text,
    CustomSelectProps
} from "@vkontakte/vkui";
import { Controller } from "react-hook-form";

const options: CustomSelectProps["options"] = [
    {
        value: "guitar",
        label: "Гитара"
    },
    {
        value: "dance",
        label: "Танцы"
    },
    {
        value: "leader",
        label: "Лидер"
    },
    {
        value: "script",
        label: "Сценарное мышление"
    },
    {
        value: "sound",
        label: "Работа со звуком"
    },
    {
        value: "script",
        label: "Сценарное мышление"
    }
];

export const OurBlock = () => {
    return (
        <Group header={<Header mode="secondary">Для нас</Header>}>
            <Div>
                <Text
                    weight="medium"
                    style={{ color: "var(--text_secondary)" }}
                >
                    Цель следующего блока понять твои сильные стороны.
                </Text>
            </Div>
            <Controller
                name="priority1"
                rules={{ required: "Это поле необходимо заполнить" }}
                render={({ field, fieldState }) => (
                    <FormItem
                        top="Приоритет 1"
                        status={fieldState.invalid ? "error" : "default"}
                        bottom={fieldState.error && fieldState.error.message}
                    >
                        <Select
                            getRef={field.ref}
                            name={field.name}
                            value={field.value}
                            placeholder="Не выбран"
                            options={options}
                            onChange={field.onChange}
                        />
                    </FormItem>
                )}
            />
            <Controller
                name="priority2"
                rules={{ required: "Это поле необходимо заполнить" }}
                render={({ field, fieldState }) => (
                    <FormItem
                        top="Приоритет 2"
                        status={fieldState.invalid ? "error" : "default"}
                        bottom={fieldState.error && fieldState.error.message}
                    >
                        <Select
                            getRef={field.ref}
                            name={field.name}
                            value={field.value}
                            placeholder="Не выбран"
                            options={options}
                            onChange={field.onChange}
                        />
                    </FormItem>
                )}
            />
            <Controller
                name="priority3"
                rules={{ required: "Это поле необходимо заполнить" }}
                render={({ field, fieldState }) => (
                    <FormItem
                        top="Приоритет 3"
                        status={fieldState.invalid ? "error" : "default"}
                        bottom={fieldState.error && fieldState.error.message}
                    >
                        <Select
                            getRef={field.ref}
                            name={field.name}
                            value={field.value}
                            placeholder="Не выбран"
                            options={options}
                            onChange={field.onChange}
                        />
                    </FormItem>
                )}
            />

            <Controller
                name="letter"
                render={({ field }) => (
                    <FormItem
                        top="Письмо комсоставу (необязательно)"
                        bottom="Мы будем рады прочесть"
                    >
                        <Textarea
                            getRef={field.ref}
                            {...field}
                            placeholder="Опиши чем ты круче других кандидатов"
                        />
                    </FormItem>
                )}
            />
        </Group>
    );
};
