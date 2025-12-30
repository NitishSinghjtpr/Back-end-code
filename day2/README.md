Short Notes: Concepts Used in the Code
1. Express.js

Express is a Node.js web framework used to create REST APIs easily.
In this code, express() creates the server and handles HTTP requests like GET, POST, and PATCH.

2. MongoDB with Mongoose

Mongoose is an ODM (Object Data Modeling) library for MongoDB.
User is a Mongoose model created from a schema and is used to perform database operations like create, find, and findById.

3. Database Connection

The db() function connects the application to MongoDB.
.catch() is used to handle connection errors.

4. Middleware

app.use(express.json()) is a built-in middleware used to parse JSON data coming from the client in request bodies.

5. REST API

The code follows RESTful API principles:

POST → create data

GET → read data

PATCH → update data

6. Routing

Express routing is used to define endpoints:

/register → user registration

/alluser → get all users

/user/:id → get user by ID

/updateuser/:id → update user data

7. Async / Await

async and await are used to handle asynchronous database operations in a clean and readable way.

8. CRUD Operations

The code performs all basic CRUD operations:

Create → User.create()

Read → User.find(), User.findById()

Update → User.findByIdAndUpdate()

9. Error Handling

try...catch blocks are used to handle runtime and database errors gracefully.

10. Request Parameters

req.params.id is used to extract the dynamic ID from the URL for fetching or updating a specific user.

11. JSON Responses

Responses are sent in JSON format using res.send() and res.json() to communicate with the client.

12. Server Listening

app.listen(2020) starts the server on port 2020, making the API accessible.