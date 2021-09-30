import { Client } from "@notionhq/client";

export const notion = new Client({
    auth: process.env.REACT_APP_NOTION_KEY,
    baseUrl: `${process.env.REACT_APP_CORS_BYPASS}/https://api.notion.com`
});
