# 📘 Short Notes: Express.js & Middleware (Detailed)

---

## 🚀 Express.js
**Express.js** ek popular **Node.js framework** hai jo server aur RESTful APIs banana easy banata hai.

- Fast aur lightweight framework  
- Routing aur middleware support karta hai  
- HTTP methods (GET, POST, DELETE, etc.) ko easily handle karta hai  

👉 Express ka main kaam server-side logic ko simple aur structured banana hai.

---

## 🔗 Middleware
**Middleware** ek function hota hai jo **request aur response ke beech** execute hota hai.

Middleware ke kaam:
- Request data ko modify karna  
- Logging karna  
- Authentication / validation  
- Request flow ko control karna  

---

## ⚙️ `app.use()`
```js
app.use("/trial", middlewareFunction);
Middleware ko apply karne ke liye use hota hai

Given path (/trial) par sabhi HTTP methods ke liye run karta hai

Global ya route-specific middleware dono ho sakte hain

🔁 Multiple Middleware
Ek hi route par multiple middleware lagaye ja sakte hain.

Middleware sequence (order) me execute hote hain

Pehle middleware ka kaam complete hone ke baad next chalta hai

⏭️ next() Function
js
Copy code
next();
Control ko next middleware ya route handler tak bhejta hai

Agar next() call nahi hua → request wahi stop ho jati hai

Middleware chain ke liye mandatory hai

🧭 Route Handling
Routes define karte hain ki server:

Kaunse URL par

Kaunse HTTP method ke saath

Kya response dega

Routes application ke behavior ko control karte hain.

📥 GET Method
js
Copy code
app.get("/user", ...);
Server se data retrieve karne ke liye use hota hai

Browser ya client se data fetch karta hai

📤 POST Method
js
Copy code
app.post("/user", ...);
Server ko data send ya save karne ke liye

Forms, registration, login me common hai

❌ DELETE Method
js
Copy code
app.delete("/user", ...);
Server se data delete karne ke liye use hota hai

Mostly database records remove karne ke liye

🔄 Request–Response Cycle
Request–Response cycle ka flow:

arduino
Copy code
Client → Request → Server → Processing → Response → Client
Client request bhejta hai

Server process karta hai

Response client ko return hota hai

🚀 Server Listening
js
Copy code
app.listen(8080);
Server ko port 8080 par start karta hai

Incoming client requests ka wait karta hai

🏁 Conclusion
Ye concepts Express.js application ka base hote hain:

Middleware flow

Routing system

HTTP methods

Request–Response cycle