// Get .env variables
if (process.env.NODE_ENV !== "production") require("dotenv").config();

// Transpile ES modules to require
require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"]
});

// Run main file
require("./server");
