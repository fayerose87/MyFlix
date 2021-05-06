const express = require("express"),
  bodyParser = require("body-parser"),
  morgan = require("morgan");

const app = express();

let movies = [
  {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    genre: "Action",
    director: "Christopher Nolan",
  },
  {
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    genre: "Sci-Fi",
    director: "Christopher Nolan",
  },
  {
    title: "Memento",
    description:
      "A man with short-term memory loss attempts to track down his wife's murderer.",
    genre: "Thriller",
    director: "Christopher Nolan",
  },
  {
    title: "12 Monkeys",
    description:
      "In a future world devastated by disease, a convict is sent back in time to gather information about the man-made virus that wiped out most of the human population on the planet.",
    genre: "Sci-Fi",
    director: "Terry Gilliam",
  },
  {
    title: "Eternal Sunshine Of The Spotless Mind",
    description:
      "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
    genre: "Sci-Fi",
    director: "Michel Gondry",
  },
  {
    title: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    genre: "Drama",
    director: "Frank Darabont",
  },
  {
    title: "Forrest Gump",
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
    genre: "Drama",
    director: "Robert Zemeckis",
  },
  {
    title: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    genre: "Drama",
    director: "David Fincher",
  },
  {
    title: "The Lord Of The Rings: The Return Of The King",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    genre: "Fantasy",
    director: "Peter Jackson",
  },
  {
    title: "The Dark Night",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    genre: "Action",
    director: "Christopher Nolan",
  },
];

app.use(bodyParser.json());
app.use(morgan("common"));
app.use(express.static("public"));

//GET requests
app.get("/", (req, res) => {
  res.send("Welcome to my MyFlix!");
});

//Get a list of all movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

//Get data about single movie
app.get("/movies/:title", (req, res) => {
  res.json(
    movies.find((movie) => {
      return movie.title === req.params.title;
    })
  );
});

//Get data about a genre by name/title
app.get("/movies/genres/:genre", (req, res) => {
  res.send("Successful GET request returning a description of the genre");
});

//Get data about a director
app.get("/movies/directors/:director", (req, res) => {
  res.send("Successful GET request returning a description of the director");
});

//Allow new user to register
app.post("/users", (req, res) => {
  res.send("Registration was successful!");
});

//Allow user to update their info
app.put("/users/:username", (req, res) => {
  res.send("Your profile was successfully updated");
});

//Allow user to add a movie to their list
app.post("/users/:username/favorites", (req, res) => {
  res.send(req.params.title + " was added to favorites.");
});

//Alow user to remove a movie from their list
app.delete("/users/:username/favorites/:title", (req, res) => {
  res.send(req.params.title + " was removed from favorites.");
});

//Allow user to deregister
app.delete("/users/:username", (req, res) => {
  res.send("Your account has successfully been removed");
});

//Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//Listen for requests
app.listen(8080, () => {
  console.log("This app is listening on Port 8080.");
});
