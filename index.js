const express = require("express");
const app = express();

// GET requests
app.get("/", (req, res) => {
  res.send("Welcome to my MyFlix!");
});

app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", { root: __dirname });
});

app.get("/movies", (req, res) => {
  res.json(topMovies);
});

//Listen for requests
app.listen(8080, () => {
  console.log("This app is listening on Port 8080.");
});
