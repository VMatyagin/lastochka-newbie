import { Button, Panel, PanelProps, Spinner, Title } from "@vkontakte/vkui";
import { observer } from "mobx-react-lite";
import { FC, useContext } from "react";
import styled from "styled-components";
import { appStore } from "../../features/stores/app-store";
import { LogoCircle } from "../../ui/atom/Icon";
import { Link } from "@unexp/router";
import { CenterAlignBox } from "../../ui/atom/CenterAlignBox";

const SpinnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 70px;
    padding: 0 20px;
`;

export const HomePanel: FC<PanelProps> = observer((props) => {
    const { isInitialization } = useContext(appStore);
    return (
        <Panel {...props}>
            <CenterAlignBox>
                <LogoCircle width={170} height={170} />
                <Title level="2" weight="semibold">
                    Анкета кандидата
                </Title>
            </CenterAlignBox>
            <SpinnerWrapper>
                {isInitialization ? (
                    <Spinner />
                ) : (
                    <Link to="/form">
                        <Button stretched={true} size="m">
                            Заполнить
                        </Button>
                    </Link>
                )}
            </SpinnerWrapper>
        </Panel>
    );
});
