# Task Manager Backend API

This repository contains the backend for the MERN Stack Task Manager application. It is built using Node.js and Express, and uses MongoDB as the database to do CRUD operations for managing user tasks.

# Technology Stack

The core technologies used to build this API are:

1. Node.js, Express, MongoDB and Cors

2. JSON Web Tokens (JWT): For secure authorization.

# Project Architecture

This backend follows the Model-Route-Controller pattern, which helps separate functions and makes it more readable.

**Models (/models):**  Schema or structure for the MongoDB documents using Mongoose.

**Routes (/routes):** Routes the request from frontend to the specified controller function. They also can pass requests through certain middlewares for purposes like authorization.

**Controllers (/controllers):**  These contain the backend logic. They receive requests from the routes, use the models for database operations and sends back the response.

# Features & Functionality

This API provides the following core services:

**User Management (/controllers/users)**

- Registration: Create a new user account.  
- Login: Authenticate a user and return a JWT.  
- Get User Profile: Retrieve the currently logged-in user's details.

**Task Management (/controllers/taskController)**

- Create Task (/createTaskController): Add a new task (requires authentication and authorization).  
- Get All Tasks (/getTasksController): Retrieve all tasks belonging to the authenticated user.  
- Get Single Task (/viewTaskController): Retrieve a specific task by ID.  
- Update Task (/editTaskController): Modify an existing task by ID.  
- Delete Task (/deleteTaskController): Remove a task by ID.

# Prerequisites

Before running the project, install :

- Node.js  
- npm (the package manager for Node comes installed with Node.js)

**MongoDB:**

- Create an account on MongoBD Atlas and create a database there.  
- Make two collection named `tasks` and `users`.

**.env file:**  
Create a .env file (environment file) to hold data like database connection string and the secret keys.

# Setup

Follow these steps to get the backend running locally:

```1. Clone the Repository
git clone https://github.com/VisSuk/TaskManager-Backend.git
cd TaskManager-Backend
```
```2. Install Dependencies: 
npm install express cors dotenv mongoose jsonwebtoken 
```
