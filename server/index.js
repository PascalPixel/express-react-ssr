import { resolve } from "path";
import express from "express";
import pages from "./pages";
import api from "./api";
import db from "./db";

// Init Express
let app = express();
let port = process.env.PORT;

// Public folder
app.use(express.static(resolve(__dirname, "../public")));

// Pages
pages(app);

// API
api(app);

// Database
app
  .route("/books")
  .get((req, res) => {
    db.query("SELECT * FROM books", (err, data) => {
      if (err) throw err;
      res.status(200).json(data.rows);
    });
  })
  .post(({ author, title }, res) => {
    db.query(
      "INSERT INTO books (author, title) VALUES ($1, $2)",
      [author, title],
      err => {
        if (err) throw err;
        res.status(201).json({ status: "success", message: "Book added." });
      }
    );
  });

// Start server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
