import { Entry, EntrySkeletonType } from "contentful";
import { convertRichTextToHTML, getProject } from "./contentfulMarkdownRenderer.js";
import { writeToFile } from "./writeToFile.js";
import { NodeHtmlMarkdown } from "node-html-markdown";

const specifiedRichTextField = process.argv[2];
console.log("specifiedRichTextField: ", specifiedRichTextField);
if (!specifiedRichTextField || typeof specifiedRichTextField !== "string") {
  console.error("Please provide a rich text field name as an argument.");
  process.exit(1);
}

async function main() {
  // Fetch the project from Contentful
  let project: Awaited<ReturnType<typeof getProject>>;
  try {
    project = await getProject("5kwgY0nLn1cdS4Z9GTZXos");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  // Convert the rich text field to HTML
  const rawRichTextField = project.fields[specifiedRichTextField];
  const html = convertRichTextToHTML(rawRichTextField);
  const markdown = NodeHtmlMarkdown.translate(html);

  // writeToFile(html, "index.html");
  // writeToFile(markdown, "index.md");

  console.log(markdown);
}

main();
