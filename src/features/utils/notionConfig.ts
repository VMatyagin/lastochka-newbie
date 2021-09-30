import { Client } from "@notionhq/client";
import axios from "axios";

export const notion = new Client({
    auth: process.env.REACT_APP_NOTION_KEY,
    baseUrl: `${process.env.REACT_APP_CORS_BYPASS}/https://api.notion.com`
});

export const patchUserPage = async (pageId: string, data: any) => {
    await axios.patch(
        `${process.env.REACT_APP_CORS_BYPASS}/https://api.notion.com/v1/pages/${pageId}`,
        data,
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${process.env.REACT_APP_NOTION_KEY}`,
                "Notion-Version": "2021-08-16"
            }
        }
    );
};
