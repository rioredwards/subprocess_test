import { getProject } from "./contentful_markdown_renderer.js";

console.log("Hello From Typescript!");

async function main() {
  const project = await getProject("5kwgY0nLn1cdS4Z9GTZXos");
  console.log(project);
}

main();
