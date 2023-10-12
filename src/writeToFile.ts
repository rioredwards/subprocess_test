import path from "path";
import fs from "fs";

export function writeToFile(content: string, dir: string) {
  fs.writeFile(dir, content, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}
