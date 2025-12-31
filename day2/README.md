# 📘 Short Notes: Concepts Used in the Code

---

## 1️⃣ Express.js
**Express.js** ek Node.js web framework hai jo REST APIs banana easy banata hai.

- `express()` server create karta hai  
- HTTP methods jaise **GET, POST, PATCH** ko handle karta hai  
- Routing aur middleware ko simple banata hai  

---

## 2️⃣ MongoDB with Mongoose
**Mongoose** ek **ODM (Object Data Modeling)** library hai jo MongoDB ke saath kaam karti hai.

- `User` ek **Mongoose model** hai  
- Schema se bana hota hai  
- Database operations perform karta hai:
  - `create()`
  - `find()`
  - `findById()`

---

## 3️⃣ Database Connection
Database connection ek function ke through establish hota hai.

- Application ko MongoDB se connect karta hai  
- `.catch()` ka use connection errors handle karne ke liye hota hai  

---

## 4️⃣ Middleware
```js
app.use(express.json());
Built-in Express middleware

Client se aane wale JSON data ko parse karta hai

Data ko req.body me available banata hai

5️⃣ REST API
Application RESTful API principles follow karta hai:

POST → Create data

GET → Read data

PATCH → Update data

6️⃣ Routing
Express routing ke through different endpoints define kiye gaye hain:

/register → User registration

/alluser → Sabhi users fetch karna

/user/:id → ID ke basis par user lana

/updateuser/:id → User data update karna

7️⃣ Async / Await
js
Copy code
async / await
Asynchronous database operations handle karta hai

Code ko readable aur clean banata hai

Server ko block hone se bachata hai

8️⃣ CRUD Operations
Code me CRUD operations implement kiye gaye hain:

Create → User.create()

Read → User.find(), User.findById()

Update → User.findByIdAndUpdate()

9️⃣ Error Handling
js
Copy code
try { ... } catch (error) { ... }
Runtime aur database errors handle karta hai

Server crash hone se bachata hai

Proper error response client ko deta hai

🔟 Request Parameters
js
Copy code
req.params.id
URL se dynamic ID extract karta hai

Specific user ko fetch ya update karne ke liye use hota hai

1️⃣1️⃣ JSON Responses
js
Copy code
res.send()
res.json()
Client ko response JSON format me bhejne ke liye

Frontend aur backend ke beech communication ke liye important

1️⃣2️⃣ Server Listening
js
Copy code
app.listen(2020)
Server ko port 2020 par start karta hai

API ko client ke liye accessible banata hai

🏁 Conclusion
Ye code Node.js, Express aur MongoDB (Mongoose) ka use karke
ek complete RESTful API implement karta hai jo:

Clean routing

Secure database operations

Proper error handling

Full CRUD functionality