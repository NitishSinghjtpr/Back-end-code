# 📘 Short Notes: Concepts Used in the Code

---

## 🚀 Backend (Node.js & Express)

### 1️⃣ Node.js
**Node.js** ek runtime environment hai jo JavaScript ko server-side par run karne deta hai.  
Is application ka backend Node.js par run karta hai.

---

### 2️⃣ Express.js Framework
**Express.js** ek lightweight web framework hai jo web servers aur REST APIs banane ke liye use hota hai.

```js
const express = require("express");
🔹 Ye routing, request handling aur middleware ko simple banata hai.

3️⃣ Express Application Object
js
Copy code
const app = express();
app object ka use:

Routes define karne ke liye

Middleware apply karne ke liye

Server start karne ke liye

4️⃣ MongoDB with Mongoose Model
js
Copy code
const User = require("./database/databade");
🔹 User ek Mongoose model hai
🔹 MongoDB collection se connect hota hai
🔹 Database operations (CRUD) ke liye use hota hai

5️⃣ Middleware – express.json()
js
Copy code
app.use(express.json());
🔹 Client se aane wale JSON data ko parse karta hai
🔹 Parsed data req.body me available hota hai

6️⃣ HTTP GET Method
js
Copy code
app.get("/register", (req, res) => {
  res.send("Welcome to the register page");
});
✔️ Data fetch karne ya page show karne ke liye
✔️ Client ko simple response bhejta hai

7️⃣ HTTP POST Method
js
Copy code
app.post("/home", async (req, res) => { ... });
✔️ Server ko data send karne ke liye
✔️ Registration / form submission me use hota hai

8️⃣ Async / Await
js
Copy code
async (req, res) => { ... }
🔹 Asynchronous operations ko handle karta hai
🔹 Server ko block hone se bachata hai

9️⃣ Create Operation (CRUD)
js
Copy code
User.create(req.body);
🟢 CRUD ka Create operation
🟢 MongoDB me naya user record insert karta hai

🔟 Request Body
js
Copy code
req.body
📦 Client ke POST request ka data store karta hai
📦 Jaise: name, email, password, etc.

1️⃣1️⃣ Error Handling
js
Copy code
try { ... } catch (err) { ... }
⚠️ Runtime ya database errors handle karta hai
⚠️ Application crash hone se bachata hai

1️⃣2️⃣ HTTP Status Codes
js
Copy code
res.status(500)
🔴 500 → Internal Server Error
🔹 Error ki proper information client ko milti hai

1️⃣3️⃣ Response Handling
js
Copy code
res.send()
📤 Server se client ko response bhejne ke liye use hota hai

1️⃣4️⃣ Server Port
js
Copy code
const port = 4000;
🔢 Server kis port par run karega ye define karta hai

1️⃣5️⃣ Starting the Server
js
Copy code
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
🚀 Server start karta hai
📡 Incoming requests ko listen karta hai

1️⃣6️⃣ RESTful API Design
Application REST principles follow karta hai:

GET → Retrieve data / page

POST → Create data

🗄️ Database Concepts (MongoDB & Mongoose)
1️⃣ Mongoose
Mongoose ek ODM (Object Data Modeling) library hai jo Node.js ko MongoDB se connect karti hai
aur schemas aur models define karne me help karti hai.

2️⃣ MongoDB Connection
js
Copy code
mongoose.connect("mongodb://localhost:27017/student");
🔗 Local MongoDB server se connect karta hai
📂 student naam ka database use karta hai

3️⃣ Async Function
js
Copy code
async function main() { ... }
🔹 Database connection ko asynchronously handle karta hai
🔹 Execution ko block hone se bachata hai

4️⃣ Promise Error Handling
js
Copy code
main().catch((error) => { ... });
⚠️ Connection errors ko safely handle karta hai
⚠️ App crash hone se bachata hai

5️⃣ Schema
js
Copy code
const mySchema = new mongoose.Schema({ ... });
📐 Schema document ka structure define karta hai
📐 Data types aur validation rules set karta hai

6️⃣ Field Definition
Each schema field specify karta hai:

Data Type

Validation Rules

Constraints

Example:

js
Copy code
name: { type: String }
7️⃣ Validation
Mongoose built-in validation provide karta hai:

required: true → field mandatory

maxlength → max characters

minlength → min characters

8️⃣ Unique Constraint
js
Copy code
unique: true
🔐 Email jaise fields ke duplicate entries ko prevent karta hai

9️⃣ String Data Type
js
Copy code
type: String
📝 Field string value store karega

🔟 Model
js
Copy code
const User = mongoose.model("User", mySchema);
📦 Model schema ka wrapper hota hai
📦 CRUD operations perform karne ke liye use hota hai

1️⃣1️⃣ Collection Creation
Mongoose automatically:

User → users collection create karta hai

(Plural form follow karta hai)

1️⃣2️⃣ Module Export
js
Copy code
module.exports = User;
🔁 Model ko dusri files me reuse karne ke liye export karta hai

1️⃣3️⃣ Data Integrity
✔️ Schema validations data consistency maintain karti hain
✔️ Galat data database me jane se rokti hain

1️⃣4️⃣ Local Database Usage
🏠 Local MongoDB server development ke liye common hota hai

1️⃣5️⃣ MVC Pattern Support
📌 Ye file Model layer represent karti hai
📌 MVC (Model–View–Controller) architecture follow hota hai

🏁 Conclusion
Ye application Node.js, Express aur MongoDB (Mongoose) ka use karke
ek secure, structured aur RESTful backend system implement karti hai.