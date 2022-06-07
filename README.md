# backend-assignment
 Assignment of backend developer

 Name: Category App  
 Version: 1.0.0

# Node/Express/Mongoose Category App

# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
- `npm run dev` to start the local server

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript
- [cors](https://github.com/expressjs/express) - For providing a Connect/Express middleware that can be used to enable CORS with various options.
- [nodemon](https://github.com/expressjs/express) - Automatically restarts the node application when file changes in the directory are detected
- [redis](https://github.com/expressjs/express) - A modern, high performance Redis client for Node.js
- [mongodb](https://github.com/expressjs/express) - The official MongoDB driver for Node.js

## Application Structure

- `server.js` - The entry point to our application. It requires the routes and models we'll be using in the application.
- `config/` - This folder contains configuration of mongoose database and redis.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.