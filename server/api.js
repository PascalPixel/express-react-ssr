import { resolve } from "path";
import { getFiles, getNamesFromFiles } from "./helpers";

export default app => {
  // Get all files in the api folder
  let files = getFiles("../api");

  // Save file names as points
  let points = getNamesFromFiles(files);

  // Load apiCall from file
  points.forEach(point => {
    // Register api point per route
    app.get(
      `/api/${point}`,
      require(resolve(__dirname, `../api/${point}`)).default
    );
  });
};
