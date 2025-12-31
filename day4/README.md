# 📘 Food Menu & Cart API – Short Notes (With CRUD)

---

## 🚀 Project Overview
This project is a **Food Ordering Backend API** built using **Node.js** and **Express.js**.  
It performs **CRUD operations** on a food menu and manages a **user cart system** using in-memory data.

---

## 🛠️ Technologies Used
- **Node.js** – Server-side JavaScript runtime  
- **Express.js** – Web framework for routing & APIs  
- **In-Memory Data** – Used instead of a database  

---

## 📦 Express Server Setup
```js
const express = require("express");
const app = express();
Express application create karta hai

Routes aur middleware define karne ke kaam aata hai

📂 In-Memory Database (Food Menu)
js
Copy code
const FoodMenu = [ ... ];
Ye array database ka kaam karta hai

Har object ek food item represent karta hai

Fields:

id

food

category

price

🛒 Cart Data Structure
js
Copy code
const AddToCart = [];
User ke selected items store karta hai

Temporary cart (server restart par empty ho jata hai)

⚙️ Middleware – JSON Parser
js
Copy code
app.use(express.json());
Client se aane wale JSON data ko parse karta hai

Data req.body me available hota hai

🌐 API Routes & Functionality
1️⃣ GET – View Food Menu
js
Copy code
app.get("/food", ...)
Saare food items retrieve karta hai

Read operation (CRUD)

Response status: 200 OK

2️⃣ PATCH – Update Food Item
js
Copy code
app.patch("/food/:id", ...)
Existing food item ko update karta hai

Fields:

food

category

price

Update operation (CRUD)

3️⃣ POST – Add Food Item (Admin)
js
Copy code
app.post("/admin", ...)
New item FoodMenu me add karta hai

Dummy authentication token use kiya gaya hai

Create operation (CRUD)

Success response: 201 Created

4️⃣ DELETE – Remove Food Item
js
Copy code
app.delete("/delete/:id", ...)
FoodMenu se item delete karta hai

ID ke basis par delete hota hai

Delete operation (CRUD)

🛒 Cart Section (User Side)
5️⃣ POST – Add Item to Cart
js
Copy code
app.post("/user/:id", ...)
FoodMenu se item cart me add karta hai

Agar item exist karta hai → add hota hai

Otherwise → "Item out of stock"

6️⃣ DELETE – Remove Item from Cart
js
Copy code
app.delete("/user/:id", ...)
Cart se item remove karta hai

ID ke basis par operation hota hai

Error handling included

7️⃣ GET – View Cart
js
Copy code
app.get("/user", ...)
Cart ke saare items show karta hai

Agar cart empty ho → "Cart is Empty"

🔄 CRUD Operations Summary
Operation	HTTP Method	Route
Create	POST	/admin, /user/:id
Read	GET	/food, /user
Update	PATCH	/food/:id
Delete	DELETE	/delete/:id, /user/:id

🔁 Request–Response Cycle
arduino
Copy code
Client → Request → Server → Processing → Response → Client
Client request bhejta hai

Server logic apply karta hai

Response client ko return hota hai

🚀 Server Listening
js
Copy code
app.listen(8080, () => {
  console.log("server listening at port 8080");
});
Server port 8080 par start hota hai

Client requests ka wait karta hai

⚠️ Limitations
Data permanently store nahi hota

Authentication dummy hai

Database (MongoDB) use nahi kiya gaya

🏁 Conclusion
Ye project Express.js CRUD operations,
routing, middleware, aur cart logic ko samajhne ke liye best example hai.

Beginner-level backend development ke liye ye ek strong foundation project hai.

yaml
Copy code
