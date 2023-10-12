import { convertRichTextToHTML, getProject } from "./contentfulMarkdownRenderer.js";
import { writeToFile } from "./writeToFile.js";
import { NodeHtmlMarkdown, NodeHtmlMarkdownOptions } from "node-html-markdown";

console.log("Hello From Typescript!");

async function main() {
  const project = await getProject("5kwgY0nLn1cdS4Z9GTZXos");
  const rawRichTextField = project.fields.slogan;
  // console.log("rawRichTextField: ", rawRichTextField);
  const html = convertRichTextToHTML(rawRichTextField);
  // console.log(html);
  writeToFile(html, "index.html");
  const markdown = NodeHtmlMarkdown.translate(
    /* html */ html,
    /* options (optional) */ {},
    /* customTranslators (optional) */ undefined,
    /* customCodeBlockTranslators (optional) */ undefined
  );
  writeToFile(markdown, "index.md");
  console.log(markdown);
}

main();
