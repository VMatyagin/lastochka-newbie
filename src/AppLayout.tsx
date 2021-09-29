import { FC } from "react";
import { observer } from "mobx-react-lite";
import {
    usePlatform,
    VKCOM,
    SplitCol,
    SplitLayout,
    PanelHeader
} from "@vkontakte/vkui";

import { HomePanel } from "./pages/HomePanel";
import { SuccessPanel } from "./pages/SuccessPanel";
import { FormPanel } from "./pages/FormPanel";
import { Match, View } from "@unexp/router";

export const AppLayout: FC = observer(() => {
    const platform = usePlatform();
    const hasHeader = platform !== VKCOM;

    return (
        <SplitLayout
            header={hasHeader && <PanelHeader separator={false} />}
            style={{ justifyContent: "center" }}
        >
            <SplitCol
                animate={true}
                spaced={false}
                width={"100%"}
                maxWidth={"100%"}
            >
                <Match>
                    <View>
                        <HomePanel nav="/" />
                        <FormPanel nav="/form" />
                        <SuccessPanel nav="/success" />
                    </View>
                </Match>
            </SplitCol>
        </SplitLayout>
    );
});
