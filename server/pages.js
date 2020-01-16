import { getFiles, getNamesFromFiles } from "./helpers";
import dry from "./dry";

export default app => {
  // Get all files in pages folder
  let files = getFiles("../pages");

  // Save file names as routes
  let routes = getNamesFromFiles(files);

  // React Server-side Rendering each route
  let renders = dry(routes);

  routes.forEach(route => {
    // Register page per route
    app.get(`/${route !== "index" ? route : ""}`, (req, res) => {
      res.send(renders[route]);
    });
  });
};
