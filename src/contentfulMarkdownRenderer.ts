import dotenv from "dotenv";
import pkg from "contentful";
const { createClient } = pkg;
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

dotenv.config();

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getProject(id: string) {
  const entry = await client.getEntry(id);
  return entry;
}

export const convertRichTextToHTML = (rawRichText: any) => {
  return documentToHtmlString(rawRichText);
};
