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

export const FormPanel: FC<PanelProps> = observer((props) => {
    return (
        <Panel {...props}>
            <PanelHeader>Форма</PanelHeader>
            <Group>
                <Link to="/success">
                    <SimpleCell>К success</SimpleCell>
                </Link>
            </Group>
        </Panel>
    );
});
