import { Button, Panel, PanelProps, Placeholder } from "@vkontakte/vkui";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Link } from "@unexp/router";
import { Icon56Stars3Outline } from "@vkontakte/icons";

export const SuccessPanel: FC<PanelProps> = observer((props) => {
    return (
        <Panel {...props}>
            <Placeholder
                icon={<Icon56Stars3Outline />}
                action={
                    <Link to="/form">
                        <Button size="m" mode="tertiary">
                            Хочу изменить анкету
                        </Button>
                    </Link>
                }
                stretched
            >
                Все отлично! Мы свяжемся с тобой
            </Placeholder>
        </Panel>
    );
});
