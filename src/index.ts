import { convertRichTextToHTML, getProject } from "./contentfulMarkdownRenderer.js";
import { writeToFile } from "./writeToFile.js";

console.log("Hello From Typescript!");

async function main() {
  const project = await getProject("5kwgY0nLn1cdS4Z9GTZXos");
  const rawRichTextField = project.fields.slogan;
  console.log("rawRichTextField: ", rawRichTextField);
  const html = convertRichTextToHTML(rawRichTextField);
  console.log(html);
  writeToFile(html, "index.html");
}

main();
