# WTWR (What to Wear?): Back End

## Project Overview

This project is the back-end server for the WTWR (What to Wear?) application, which helps users organize clothing items based on weather conditions.

The server provides a RESTful API for managing user accounts and clothing items, handling authentication and authorization, and storing application data in a MongoDB database.

The project was developed as part of the TripleTen Software Engineering program to gain hands-on experience with back-end development, database management, API design, data validation, and security.

## Technologies Used

- **Node.js** — JavaScript runtime environment for the server.
- **Express.js** — Framework for building API routes and handling HTTP requests.
- **MongoDB** — NoSQL database for storing users and clothing items.
- **Mongoose** — Library for creating database schemas and interacting with MongoDB.
- **Validator** — Library for validating user input, including email addresses and URLs.
- **bcryptjs** — Library for securely hashing and comparing passwords.
- **JSON Web Token (JWT)** — Used for token-based authentication.
- **CORS** — Middleware for handling cross-origin requests.
- **ESLint** — Tool for maintaining consistent code quality.
- **Nodemon** — Development utility for automatically restarting the server.
- **Postman** — Tool for testing API endpoints and verifying server responses.

## Project Features

### User Management

- Create new user accounts with a name, avatar, email address, and password.
- Validate user information before saving it to the database.
- Prevent registration with an email address that already exists.
- Securely hash passwords before storing them.
- Retrieve user information through API endpoints.
- Update user profile information.

### Authentication and Authorization

- Authenticate registered users using their email address and password.
- Generate JWTs with a seven-day expiration period.
- Protect restricted API routes using authentication middleware.
- Identify authenticated users through their JWTs.
- Restrict certain actions to authorized users.
- Exclude password information from API responses.

### Clothing Item Management

- Create and retrieve clothing items.
- Store clothing item information, including name, weather category, and image URL.
- Associate clothing items with their owners.
- Delete clothing items.
- Allow users to like and unlike clothing items.
- Track likes using MongoDB ObjectId references.

### Validation and Error Handling

- Validate required fields and user input using Mongoose and Validator.
- Handle invalid IDs and missing database records.
- Return appropriate HTTP status codes for successful and unsuccessful requests.
- Handle duplicate email addresses during registration.
- Provide JSON error responses with descriptive messages.
- Use centralized HTTP status code constants.

## Running the Project Locally

### Prerequisites

Before starting, make sure the following are installed:

- Node.js and npm
- MongoDB

### Installation

1. Clone the repository:

   `git clone https://github.com/thockyantho/se_project_express.git`

2. Navigate to the project directory:

   `cd se_project_express`

3. Install dependencies:

   `npm install`

4. Make sure your local MongoDB server is running.

### Available Commands

Start the server:

`npm run start`

Start the development server with Nodemon:

`npm run dev`

Check the code using ESLint:

`npm run lint`

By default, the server runs at:

`http://localhost:3001`

The application connects to a local MongoDB database named `wtwr_db`.

## API Endpoints

### Authentication

| Method | Endpoint  | Description                          |
| ------ | --------- | ------------------------------------ |
| POST   | `/signup` | Register a new user                  |
| POST   | `/signin` | Authenticate a user and return a JWT |

### Users

| Method | Endpoint    | Description                                   |
| ------ | ----------- | --------------------------------------------- |
| GET    | `/users/me` | Retrieve the authenticated user's information |
| PATCH  | `/users/me` | Update the authenticated user's profile       |

### Clothing Items

| Method | Endpoint               | Description             |
| ------ | ---------------------- | ----------------------- |
| GET    | `/items`               | Retrieve clothing items |
| POST   | `/items`               | Create a clothing item  |
| DELETE | `/items/:itemId`       | Delete a clothing item  |
| PUT    | `/items/:itemId/likes` | Like a clothing item    |
| DELETE | `/items/:itemId/likes` | Unlike a clothing item  |

Protected endpoints require a valid JWT in the Authorization header.

## Testing

API endpoints were tested using the provided TripleTen Postman collection.

Testing covered:

- User registration and authentication.
- Input validation and duplicate email handling.
- Protected routes and authorization.
- Clothing item creation, retrieval, deletion, and likes.
- Error handling and HTTP status codes.

**Sprint 13 Postman results:** 102 tests passed, with 0 failures.

The project also passed the GitHub Actions automated testing workflow.

ESLint was used to verify code quality and consistency.

## Project Pitch Video

The project pitch video provides an overview of the application, its back-end functionality, and challenges encountered during development.

[Watch the Project Pitch Video](https://drive.google.com/file/d/1m8M4VpVsrq3fJagjxiqye-IXnGwG9-Y7/view?usp=sharing)

## Repository

[View the GitHub Repository](https://github.com/thockyantho/se_project_express)
