# myFlix
The server-side component for [myFlix-React](https://github.com/fayerose87/myFlix-client) and [myFlix-Angular](https://github.com/fayerose87/myFlix-Angular). The web application provides users with access to information about different movies, directors, and genres. Users can sign up, update their personal information, and create a list of their favorite movies.

## Key Features
- Return a list of all movies to the user
- Return data (description, genre, director, image URL, whether it’s featured or not) about a single movie by title to the user
- Return data about a genre (description) by name/title (e.g., “Thriller”)
- Return data about a director (bio, birth year, death year) by name
- Allow new users to register
- llow users to update their user info (username, password, email, date of birth)
- Allow users to add a movie to their list of favorites
- Allow users to remove a movie from their list of favorites
- Allow existing users to deregister

## Built With
- JavaScript
- Node.js
- Express
- MongoDB
- Visual Studio Code

## Dependencies
- bcrypt
- body-parser
- cors
- eslint
- express
- express-validator
- jsonwebtoken
- mongoose
- morgan
- passport
- passport-jwt
- passport-local

## API Endpoints 

Request | URL | Method | Body Data 
--- | --- | --- | --- | 
Return landing/ welcome page |  / | GET | none 
Return a list of all movies |  /movies | GET | none 
Return data about a single movie, by title |  /movies/:Title | GET |  none
Return data about a director, by name |  /director/:Name | GET | none 
Return data about a genre, by name |  /genre/:Name | GET | none 
Return list of movies by director | /movies/director/:Name | GET | none
Return list of movies by genre | /movies/genre/:Name | GET | none
Allow new users to register |  /users | POST | A JSON object holding data about the user to add (username, password, email, birthday) 
Return logged-in user's data |  /users/:Username | GET | none 
Allow new users to update their data |  /users/:Username | PUT | A JSON object holding data about the user to update (username, password, email, birthday)  
Allow existing users to deregister |  /users/:Username | DELETE | none 
Allow users to add a movie to their favorites |  /users/:Username/Movies/:movieID | POST | none 
Allow users to remove a movie from their favorites |  /users/:Username/Movies/:movieID | DELETE | none 