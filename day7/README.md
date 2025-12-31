# 📘 User Registration API – Code Explanation (README Notes)

---

## 🚀 Project Overview
This project demonstrates a simple **User Registration Backend API** built using  
**Node.js**, **Express.js**, and **MongoDB with Mongoose**.

The application allows users to:
- Access a registration route
- Submit user data
- Store user details securely in MongoDB

---

## 🛠️ Technologies Used
- **Node.js** – Server-side JavaScript runtime  
- **Express.js** – Web framework for routing & APIs  
- **MongoDB** – NoSQL database  
- **Mongoose** – ODM library for MongoDB  

---

## 📦 Express & Server Setup

### 1️⃣ Importing Required Modules
```js
const express = require("express");
const User = require("./database/databade");

express → used to create the web server

User → Mongoose model used for database operations

2️⃣ Creating Express Application
const app = express();


The app object is the core of the Express application.
It is used to define routes, middleware, and start the server.

3️⃣ Defining Server Port
const port = 4000;


This specifies the port number on which the server will listen for requests.

4️⃣ JSON Middleware
app.use(express.json());


Parses incoming JSON request data

Makes the data available in req.body

🌐 Routes Implementation
5️⃣ GET Route – Register Page
app.get("/register", (req, res) => {
  res.send("Welcome to the register page");
});


Handles HTTP GET requests

Used to display a welcome or registration message

6️⃣ POST Route – User Registration
app.post("/home", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send("Registered successfully" + user);
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});


✔️ Handles HTTP POST requests
✔️ Accepts user data from req.body
✔️ Inserts a new user record into MongoDB
✔️ Uses async/await for asynchronous database operations
✔️ Includes error handling using try-catch

🚀 Starting the Server
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});


Starts the Express server

Listens for incoming client requests

🗄️ MongoDB & Mongoose Setup
7️⃣ Importing Mongoose
const mongoose = require("mongoose");


Mongoose is an ODM library that connects Node.js with MongoDB
and helps define schemas and models.

8️⃣ Database Connection
async function main() {
  await mongoose.connect("mongodb://localhost:27017/student");
  console.log("Database is connected");
}


Connects to a local MongoDB database named student

Uses an async function to avoid blocking execution

9️⃣ Connection Error Handling
main().catch((error) => {
  console.log("Error: " + error);
});


Catches and logs database connection errors

Prevents application crashes

📐 Schema Definition
🔟 User Schema
const mySchema = new mongoose.Schema({
 name:{
    type:String,
    require:true,
    maxlength:30,
    minlength:4
 },
 email:{
    type:String,
    require:true,
    unique:true,
 },
});


The schema defines:

Structure of user documents

Data types

Validation rules

✔️ name must be 4–30 characters
✔️ email must be unique
✔️ Required fields ensure data integrity

📦 Model Creation
1️⃣1️⃣ User Model
const User = mongoose.model("User", mySchema);


Creates a User model based on the schema

Used to perform CRUD operations

1️⃣2️⃣ Exporting the Model
module.exports = User;


Exports the model

Allows reuse in routes and controllers

🧠 Key Concepts Covered

Express Routing (GET & POST)

Middleware (express.json())

Async/Await

MongoDB Connection

Mongoose Schema & Model

CRUD (Create operation)

Error Handling

RESTful API Design

🏁 Conclusion

This project follows a clean backend architecture using
Node.js, Express, and MongoDB.
It demonstrates how to build a basic RESTful user registration system
with proper validation, database connection, and error handling.