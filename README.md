# backend-assignment
 Assignment of backend developer

 Name: Category App  
 Version: 1.0.0  
 Technology Stack: NodeJS, ExpressJS, MongoDB, Redis, REST API

# Node/Express/Mongoose Category App

# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://www.mongodb.com/docs/manual/administration/install-community/)) and run it by executing `mongod`
- `node server.js` to run the application
- `nodemon server.js` to automatically restarts the node application when file changes

# Code Overview

## Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests
- [mongoose](https://www.npmjs.com/package/mongoose) - For modeling and mapping MongoDB data to javascript
- [cors](https://www.npmjs.com/package/cors) - For providing a Connect/Express middleware that can be used to enable CORS with various options.
- [nodemon](https://www.npmjs.com/package/nodemon) - Automatically restarts the node application when file changes in the directory are detected
- [redis](https://www.npmjs.com/package/redis) - A modern, high performance Redis client for Node.js
- [mongodb](https://www.npmjs.com/package/mongodb) - The official MongoDB driver for Node.js

## Application Structure

- `server.js` - The entry point to our application. It requires the routes and models that we'll be using in the application.
- `config/` - This folder contains configuration of mongoose database and redis.
- `routes/` - This folder contains the route definitions for our API.
- `models/` - This folder contains the schema definitions for our Mongoose models.

## Features

1. A database model for categories which can have nesting up to 4 levels of child categories. Each category can have only one parent category. All category names must be unique. 
2. A simple CRUD operation for these categories and expose that via a GraphQL or REST API.
3. When a user searches for a category the parent category (if there is any) must be provided in a single response.
4. If the user deactivates a category then all corresponding child categories must be deactivated automatically.
5. Nesting of unlimited levels of child categories.
6. Using Redis to cache data to quickly serve further queries to the API. Clear the cache if the actual data is modified.