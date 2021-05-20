const express = require("express"),
  bodyParser = require("body-parser"),
  morgan = require("morgan");

const mongoose = require('mongoose');
const Models = require('./models.js');

const Movies = Models.Movie;
const Users = Models.User;

mongoose.connect('mongodb://localhost:27017/myFlixDB', {useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

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
app.post("/users/:username/favorites/:title", (req, res) => {
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
