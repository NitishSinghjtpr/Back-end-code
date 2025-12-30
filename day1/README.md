Short Notes: Concepts Used in the Code
1. Node.js

Node.js provides a runtime environment to run JavaScript on the server. This application runs on Node.js.

2. Express.js Framework

Express is a lightweight web framework used to build web servers and REST APIs.

const express = require("express");


It simplifies routing, request handling, and middleware usage.

3. Express Application Object
const app = express();


The app object is used to define routes, middleware, and to start the server.

4. MongoDB with Mongoose Model
const User = require("./database/databade");


User represents a Mongoose model connected to a MongoDB collection.
It is used to interact with the database (insert documents).

5. Middleware – express.json()
app.use(express.json());


This middleware parses JSON data sent from the client and makes it available in req.body.

6. HTTP GET Method
app.get("/register", (req, res) => {
  res.send("Welcome to the register page");
});


Used to fetch data or show a page

Sends a simple response to the client

7. HTTP POST Method
app.post("/home", async (req, res) => { ... });


Used to send data to the server

Commonly used for registration or form submission

8. Async / Await
async (req, res) => { ... }


async/await is used to handle asynchronous database operations without blocking the server.

9. Create Operation (CRUD)
User.create(req.body);


This performs the Create operation in CRUD by inserting a new user record into MongoDB.

10. Request Body
req.body


Contains the data sent by the client in the POST request (user details).

11. Error Handling
try { ... } catch (err) { ... }


Used to handle database or runtime errors and send proper error responses.

12. HTTP Status Codes
res.status(500)


Status code 500 indicates an internal server error.

13. Response Handling
res.send()


Sends a response back to the client after request processing.

14. Server Port
const port = 4000;


Defines the port number on which the server will run.

15. Starting the Server
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});


Starts the server and listens for incoming requests.

16. RESTful API Design

The application follows REST principles:

GET → retrieve data / page

POST → create data

FOR DATABASE

Short Notes: Concepts Used in the Code
1. Mongoose

Mongoose is an Object Data Modeling (ODM) library used to connect Node.js applications with MongoDB and define schemas and models.

2. MongoDB Connection
mongoose.connect("mongodb://localhost:27017/student");


This connects the application to a MongoDB database named student running on the local machine.

3. Async Function
async function main() { ... }


An asynchronous function is used to handle the database connection without blocking the execution of the program.

4. Promise Error Handling
main().catch((error) => { ... });


Handles connection errors using .catch() to prevent application crashes.

5. Schema
const mySchema = new mongoose.Schema({ ... });


A schema defines the structure, data types, and validation rules for documents in a MongoDB collection.

6. Field Definition

Each schema field specifies:

Data type

Validation rules

Constraints

Example:

name: { type: String }

7. Validation

Mongoose provides built-in validation:

required: true → field must be provided

maxlength → maximum allowed characters

minlength → minimum allowed characters

8. Unique Constraint
unique: true


Ensures that the email field has unique values, preventing duplicate entries in the database.

9. String Data Type
type: String


Specifies that the field stores string values.

10. Model
const User = mongoose.model("User", mySchema);


A model is a wrapper around the schema and is used to perform CRUD operations on the database.

11. Collection Creation

Mongoose automatically creates a collection named users (plural form of User) in MongoDB.

12. Module Export
module.exports = User;


Exports the model so it can be reused in other files like routes or controllers.

13. Data Integrity

Schema validations help maintain data consistency and integrity in the database.

14. Local Database Usage

The connection uses a local MongoDB server, which is common for development environments.

15. MVC Pattern Support

This file represents the Model layer in the MVC (Model-View-Controller) architecture.