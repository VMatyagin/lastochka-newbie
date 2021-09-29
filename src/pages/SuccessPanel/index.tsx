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

export const SuccessPanel: FC<PanelProps> = observer((props) => {
    return (
        <Panel {...props}>
            <PanelHeader>Succes</PanelHeader>
            <Group>
                <Link to="/">
                    <SimpleCell>К home</SimpleCell>
                </Link>
            </Group>
        </Panel>
    );
});
