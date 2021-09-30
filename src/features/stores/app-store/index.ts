import { AppearanceSchemeType, UserInfo } from "@vkontakte/vk-bridge";
import { makeAutoObservable, runInAction } from "mobx";
import { createContext } from "react";

import {
    initApp,
    APP_ID,
    getStorageValue,
    setStorageValue
} from "../../VKBridge";
import VKBridge from "@vkontakte/vk-bridge";
import { notion } from "../../utils/notionConfig";

function toIsoString(date: Date) {
    var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? "+" : "-",
        pad = function (num: number) {
            var norm = Math.floor(Math.abs(num));
            return (norm < 10 ? "0" : "") + norm;
        };

    return (
        date.getFullYear() +
        "-" +
        pad(date.getMonth() + 1) +
        "-" +
        pad(date.getDate()) +
        "T" +
        pad(date.getHours()) +
        ":" +
        pad(date.getMinutes()) +
        ":" +
        pad(date.getSeconds()) +
        dif +
        pad(tzo / 60) +
        ":" +
        pad(tzo % 60)
    );
}

export class AppStore {
    isInitialization: boolean = true;
    accessToken: string | null = null;
    userData: UserInfo | null = null;
    colorSchema: AppearanceSchemeType = "client_light";
    activeTab: Record<string, string> = {};
    appParams: Record<string, any> | null = null;
    queryString: string | undefined = undefined;

    constructor() {
        makeAutoObservable(this);
        this.load();
    }

    async load() {
        const user = await VKBridge.send("VKWebAppGetUserInfo");
        const token = await VKBridge.send("VKWebAppGetAuthToken", {
            app_id: APP_ID,
            scope: ""
        });
        const user_page_id = await getStorageValue("user-page");

        if (!user_page_id) {
            const response = await notion.pages.create({
                parent: {
                    database_id: "ec51534f8d824158aa22a0bd34abb9a5"
                },
                properties: {
                    Имя: {
                        title: [
                            {
                                text: {
                                    content: `${user.last_name} ${user.first_name}`
                                }
                            }
                        ]
                    },
                    "VK url": {
                        url: `https://vk.com/${user.id}`
                    },
                    "Первое посещение": {
                        date: {
                            start: toIsoString(new Date())
                        }
                    }
                }
            });
            setStorageValue("user-page", response.id);
        } else {
            await notion.pages.update({
                page_id: user_page_id,
                properties: {
                    "Последнее посещение": {
                        date: {
                            start: toIsoString(new Date())
                        }
                    }
                }
            });
        }

        this.userData = user;
        this.accessToken = token.access_token;
        await initApp();
        runInAction(() => {
            this.isInitialization = false;
        });
    }

    setColorScheme = (colorSchema: AppearanceSchemeType) => {
        this.colorSchema = colorSchema;
    };
    setUserData = (data: UserInfo) => {
        this.userData = data;
    };

    setAccessToken = (accessToken: string | null) => {
        this.accessToken = accessToken;
    };
    setActiveTab = (component: string, tab: string) => {
        this.activeTab = { ...this.activeTab, [component]: tab };
    };

    setAppParams = (searchParams: string) => {
        const urlSearchParams = new URLSearchParams(searchParams);

        const params = Object.fromEntries(urlSearchParams.entries());
        this.appParams = params;
        this.queryString = searchParams.slice(1);
    };
}

export const AppStoreInstance = new AppStore();

export const appStore = createContext(AppStoreInstance);
