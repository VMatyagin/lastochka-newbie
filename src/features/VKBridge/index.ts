import VKBridge, {
    VKBridgeEvent,
    AnyReceiveMethodName,
    TapticNotificationType,
    TapticVibrationPowerType
} from "@vkontakte/vk-bridge";
import { AppStoreInstance } from "../stores/app-store";

export const APP_ID = Number(process.env.REACT_APP_APP_ID);
export const API_VERSION = "5.122";

export const initApp = async () => {
    const VKConnectCallback = (e: VKBridgeEvent<AnyReceiveMethodName>) => {
        if (e.detail.type === "VKWebAppUpdateConfig") {
            VKBridge.unsubscribe(VKConnectCallback);
            AppStoreInstance.setColorScheme(e.detail.data.scheme);
        }
    };
    VKBridge.subscribe(VKConnectCallback);

    try {
        const data = await VKBridge.send("VKWebAppInit", {});
        return data;
    } catch (error) {
        return error;
    }
};

export const getAuthToken = async (scope: any) => {
    await VKBridge.send("VKWebAppGetAuthToken", {
        app_id: APP_ID,
        scope: scope.join(",")
    })
        .then((data) => {
            AppStoreInstance.setAccessToken(data.access_token);
        })
        .catch(() => {
            AppStoreInstance.setAccessToken(null);
        });
};

export const APICall = async (
    method: string,
    params: Record<string, string>,
    access_token: string
) => {
    try {
        const data = await VKBridge.send("VKWebAppCallAPIMethod", {
            method,
            params: {
                ...params,
                access_token,
                v: params["v"] === undefined ? API_VERSION : params["v"]
            }
        });
        return data.response;
    } catch (error) {
        return error;
    }
};

export const sendTapticNotification = async (type: TapticNotificationType) => {
    try {
        const data = await VKBridge.send("VKWebAppTapticNotificationOccurred", {
            type
        });
        return data;
    } catch (error) {
        return error;
    }
};
export const sendTapticImpact = async (style: TapticVibrationPowerType) => {
    try {
        const data = await VKBridge.send("VKWebAppTapticImpactOccurred", {
            style
        });
        return data;
    } catch (error) {
        return error;
    }
};

export const setStorageValue = (key: string, value: string) => {
    return VKBridge.send("VKWebAppStorageSet", {
        key,
        value
    });
};

export const getStorageValue = (key: string) => {
    return VKBridge.send("VKWebAppStorageGet", { keys: [key] }).then(
        ({ keys }) => {
            return keys && keys[0] && keys[0].value;
        }
    );
};
