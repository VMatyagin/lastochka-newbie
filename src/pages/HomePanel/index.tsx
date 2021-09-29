import {
    Group,
    Panel,
    PanelHeader,
    PanelProps,
    SimpleCell
} from "@vkontakte/vkui";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Link } from "@unexp/router";

export const HomePanel: FC<PanelProps> = observer((props) => {
    return (
        <Panel {...props}>
            <PanelHeader>Главная</PanelHeader>
            <Group>
                <Link to="/form">
                    <SimpleCell>К форме</SimpleCell>
                </Link>
            </Group>
        </Panel>
    );
});
