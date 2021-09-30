import {
    Button,
    Div,
    FormLayout,
    Group,
    Panel,
    PanelHeader,
    PanelHeaderButton,
    PanelProps
} from "@vkontakte/vkui";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BrigadesBlock } from "../../ui/organisms/BrigadesBlock";
import { OurBlock } from "../../ui/organisms/OurBlock";
import { StudyBlock } from "../../ui/organisms/StudyBlock";
import { UserBlock } from "../../ui/organisms/UserBlock";

export const FormPanel: FC<PanelProps> = observer((props) => {
    const form = useForm({
        mode: "onChange"
    });
    const { formState, handleSubmit } = form;
    const { isDirty } = formState;
    console.log(form.watch(), form.formState.errors);

    const onSubmit = (values: any) => {
        alert("submited");
    };
    return (
        <Panel {...props}>
            <PanelHeader left={<PanelHeaderButton>❤️</PanelHeaderButton>}>
                Анкета
            </PanelHeader>
            <FormLayout onSubmit={handleSubmit(onSubmit)}>
                <FormProvider {...form}>
                    <UserBlock />
                    <StudyBlock />
                    <BrigadesBlock />
                    <OurBlock />
                    <Group>
                        <Div>
                            <Button
                                type="submit"
                                disabled={!isDirty}
                                size="l"
                                stretched={true}
                            >
                                Сохранить
                            </Button>
                        </Div>
                    </Group>
                </FormProvider>
            </FormLayout>
        </Panel>
    );
});
