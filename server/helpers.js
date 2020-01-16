import { resolve } from "path";
import { readdirSync } from "fs";

export function getFiles(folder = "../pages") {
  return readdirSync(resolve(__dirname, folder), {
    withFileTypes: true
  });
}

export function getNamesFromFiles(files = []) {
  let routes = [];
  files.forEach(file => {
    if (file.isFile() && file.name.endsWith(`.js`)) {
      // Register file name as a route
      routes.push(file.name.split(".")[0]);
    }
  });
  return routes;
}
