Short Notes (Thoda Detail mein)

Express.js:-
Express is a Node.js framework used to create servers and REST APIs easily.

Middleware:-
Middleware is a function that runs between request and response. It can modify request, log data, or control flow.

app.use():-
Used to apply middleware on a specific path (/trial).
It runs for every HTTP method (GET, POST, etc.) on that route.

Multiple Middleware:-
Multiple middleware functions are executed one after another in sequence.

next() Function:-
next() passes control to the next middleware. Without it, the request stops.

Route Handling:-
Routes define how the server responds to different URLs and methods.

GET Method:-
Used to retrieve data from the server (/user).

POST Method
Used to send or save data to the server (/user).

DELETE Method:-
Used to remove data from the server (/user).

Request–Response Cycle:-
Client sends request → server processes → response is sent back.

Server Listening:-
app.listen(8080) starts the server and waits for client requests.