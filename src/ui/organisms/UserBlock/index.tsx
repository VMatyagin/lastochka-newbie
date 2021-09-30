import { Group, Header, FormItem, Input, DatePicker } from "@vkontakte/vkui";
import { Controller } from "react-hook-form";

export const UserBlock = () => {
    return (
        <Group header={<Header mode="secondary">О тебе, друг</Header>}>
            <Controller
                name="name"
                defaultValue=""
                rules={{ required: "Заполни, пожалуйста" }}
                render={({ field, fieldState }) => (
                    <FormItem
                        top="ФИО (полностью)"
                        status={fieldState.invalid ? "error" : "default"}
                        bottom={
                            fieldState.error
                                ? fieldState.error.message
                                : "Нам же нужно как-то узнать кто ты)"
                        }
                    >
                        <Input type="text" getRef={field.ref} {...field} />
                    </FormItem>
                )}
            />
            <Controller
                name="DOB"
                defaultValue=""
                rules={{ required: "Заполни, пожалуйста" }}
                render={({ field, fieldState }) => (
                    <FormItem
                        top="Дата рождения"
                        status={fieldState.invalid ? "error" : "default"}
                        bottom={fieldState.error && fieldState.error.message}
                    >
                        <DatePicker
                            name={field.name}
                            min={{
                                day: 1,
                                month: 1,
                                year: 1990
                            }}
                            max={{
                                day: 1,
                                month: 1,
                                year: new Date().getFullYear()
                            }}
                            onDateChange={({ day, month, year }) => {
                                field.onChange(
                                    new Date(year, month - 1, day).toISOString()
                                );
                            }}
                            defaultValue={
                                field.value
                                    ? {
                                          day: new Date(field.value).getDate(),
                                          month:
                                              new Date(field.value).getMonth() +
                                              1,
                                          year: new Date(
                                              field.value
                                          ).getFullYear()
                                      }
                                    : undefined
                            }
                            dayPlaceholder="ДД"
                            monthPlaceholder="ММММ"
                            yearPlaceholder="ГГГГ"
                        />
                    </FormItem>
                )}
            />
            <Controller
                name="phone"
                defaultValue={null}
                rules={{ required: "Заполни, пожалуйста" }}
                render={({ field, fieldState }) => (
                    <FormItem
                        top="Номер телефона"
                        status={fieldState.invalid ? "error" : "default"}
                        bottom={fieldState.error && fieldState.error.message}
                    >
                        <Input getRef={field.ref} type="text" {...field} />
                    </FormItem>
                )}
            />
        </Group>
    );
};
