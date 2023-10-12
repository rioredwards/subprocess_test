import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { NodeHtmlMarkdown } from "node-html-markdown";

const rawRichText = process.argv[2];
if (!rawRichText || typeof rawRichText !== "string") {
  console.error("Please provide a rich text entry as an argument.");
  process.exit(1);
}

// Convert the rich text to HTML
async function main() {
  let result: string;

  try {
    const document = JSON.parse(rawRichText);
    const html = documentToHtmlString(document);
    const markdown = NodeHtmlMarkdown.translate(html);
    result = markdown;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  // Log converted rich text to console (to be used in python script)
  console.log(result);
}

main();
