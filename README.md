# Vidly Backend - Movie Management API

Vidly Backend is a web-based movie management API built using **Node.js**, **Express**, and **MongoDB**. The application handles movie data storage, user authentication, and CRUD operations, providing a seamless and efficient backend service. Designed with Express for fast request handling and MongoDB for flexible data management, the project ensures scalability, security, and smooth integration with the frontend.

## Features

- **User Authentication:** Secure user registration, login, and role-based access control.
- **Movie Management:** Create, update, delete, and retrieve movies.
- **Genre Categorization:** Organize movies by genre for easy filtering.
- **MongoDB Storage:** Efficiently store and manage movie data in a NoSQL database.
- **Validation & Error Handling:** Implements validation with **Joi** and structured error responses.

## Technologies Used

- **Node.js** - JavaScript runtime for backend development.
- **Express.js** - Fast and minimalist web framework for handling API requests.
- **MongoDB** - NoSQL database for flexible and scalable data storage.
- **Mongoose** - ODM for managing MongoDB interactions.
- **JSON Web Token (JWT)** - Secure authentication for users.
- **Joi** - Data validation for request handling.
- **bcrypt** - Password hashing for user security.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Evans-Asiedu/vidly_backend.git
   cd vidly_backend
   npm install
   set vidly_jwtPrivateKey=your_jwt_secret
   node index.js

## API Endpoints

   Method	 Endpoint	 Description
- **GET	/api/movies**	   Retrieve all movies
- **POST	/api/movies**	   Add a new movie
- **GET	/api/movies/:id**	Retrieve a specific movie
- **PUT	/api/movies/:id**	Update movie details
- **DELETE	/api/movies/:id**	Delete a movie
- **GET	/api/genres**	   Retrieve all genres
- **POST	/api/users/register**	Register a new user
- **POST	/api/users/login**	Authenticate user and get token

## Project Structure

vidly-backend/

  models/         # Mongoose models for database schema
  routes/         # API routes for movies, users, and genres
  middleware/     # Authentication and error handling middleware
  config/         # Configuration files and environment variables
  startup/        # Individual files for starting the application
  tests/          # Contains unit and integration test codes 
  index.js        # Main server entry point
  package.json    # Project dependencies and scripts

   
