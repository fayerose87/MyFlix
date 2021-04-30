const express = require("express"),
  morgan = require("morgan");

const app = express();

let topMovies = [
  {
    title: "Inception",
  },
  {
    title: "Interstellar",
  },
  {
    title: "Memento",
  },
  {
    title: "12 Monkeys",
  },
  {
    title: "Eternal Sunshine Of The Spotless Mind",
  },
  {
    title: "The Shawshank Redemption",
  },
  {
    title: "Forrest Gump",
  },
  {
    title: "Fight Club",
  },
  {
    title: "The Lord Of The Rings: The Return Of The King",
  },
  {
    title: "The Dark Night",
  },
];

app.use(morgan("common"));

//GET requests
app.get("/", (req, res) => {
  res.send("Welcome to my MyFlix!");
});

app.get("/movies", (req, res) => {
  res.json(topMovies);
});

app.use(express.static("public"));

//Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//Listen for requests
app.listen(8080, () => {
  console.log("This app is listening on Port 8080.");
});
