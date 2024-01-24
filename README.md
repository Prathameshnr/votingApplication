# Voting System Readme

This repository contains a simple web application for conducting online voting. The application is built using Node.js and Express.js for the server-side logic, MongoDB for data storage, and EJS as the template engine for rendering views.

## Getting Started

1. Clone the Repository

```bash
git clone https://github.com/your-username/voting-system.git
```

2. Install dependencies:

```bash
cd voting-system
npm install
```

3. Create a .env file in the root directory and add the following:

```bash
PORT=3000
MONGOURL=your-mongodb-connection-string
```

Replace your-mongodb-connection-string with the actual connection string for your MongoDB database.

4. Start the application:

```bash
npm start
```

The application should now be running on http://localhost:3000.

## Dependencies

The application relies on the following Node.js packages:

- dotenv: For loading environment variables from a .env file.
- express: A web application framework for Node.js.
- mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- serve-favicon: Middleware for serving a favicon.

These dependencies can be installed using the npm install command.

## Project Structure

- /public: Contains static assets such as CSS, images, and the favicon.
- /views: Contains EJS templates for rendering HTML pages.
- /models: Contains the MongoDB schema and model definition for the Vote collection.

## Features

- Homepage (/): Displays the voting options and allows users to submit their votes.
- Voting Submission (/submit): Handles POST requests to update the vote count in the database.
- Admin Page (/admin): Displays the total vote count for each party, fetched from the MongoDB database.

## MongoDB Integration

The application connects to a MongoDB database using the mongoose library. The connection string is specified in the .env file under the variable MONGOURL.

## Acknowledgments

Special thanks to the Node.js, Express.js, and MongoDB communities for their excellent documentation and support.
