import React from "react";
import { resolve } from "path";
import { readFileSync } from "fs";
import { renderToString } from "react-dom/server";

export default routes => {
  let renders = { ...routes };

  // Get base template file
  let html = readFileSync(
    resolve(__dirname, "../templates/index.html")
  ).toString();

  // React Server-side Rendering each route
  routes.forEach(route => {
    // Load file
    let file = require(resolve(__dirname, `../pages/${route}`));
    let Page = file.default;
    let title = file.title;

    // Dry render React
    let render = renderToString(<Page />);

    // Splice dry react render into template
    renders[route] = html
      .replace(/{{mount}}/g, render)
      .replace(/{{title}}/g, title)
      .replace(
        /{{env}}/g,
        process.env.NODE_ENV === "production" ? "production" : "development"
      );
  });

  return renders;
};
