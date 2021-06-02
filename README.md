# myFlix
A server-side component of a “movies” web application. The web application provides users with access to information about different movies, directors, and genres. Users can sign up, update their personal information, and create a list of their favorite movies.

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