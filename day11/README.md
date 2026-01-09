🚀 Redis Database – Complete Notes (JWT Token Blacklist)
📌 Redis kya hai?

Redis (Remote Dictionary Server) ek
👉 in-memory key–value database hai
👉 bahut fast, lightweight aur scalable

Redis mainly use hota hai:

⚡ Caching

🔐 Session management

🚫 JWT token blacklist (Logout feature)

📊 Rate limiting

🔁 Pub/Sub system

🧠 Redis vs Normal Database (MongoDB)
Feature	Redis	MongoDB
Storage	RAM (In-Memory)	Disk
Speed	⚡ Very Fast	Medium
Data Type	Key–Value	Document
Use Case	Cache, Token, Session	Permanent Data
JWT Logout	✅ Best	❌ Not recommended
❓ JWT Logout Problem (Why Redis Needed?)
❌ JWT ka issue

JWT stateless hota hai
👉 Server token store nahi karta
👉 Logout ke baad bhi token valid rehta hai jab tak expire na ho

Logout → Cookie delete
BUT
Token still valid if copied manually ❌

✅ Redis Solution: Token Blacklisting
🧩 Concept

Logout ke time:

JWT token ko Redis me store kar do

Token ke expire time tak Redis me rakho

Har protected API me check karo:

agar token Redis me hai → ❌ BLOCK

🔄 JWT + Redis Logout Flow (High Level)
Login
  ↓
JWT token generate
  ↓
Client (cookie/header)
  ↓
Protected API request
  ↓
Redis check → JWT verify
  ↓
Response

Logout Flow
Logout
  ↓
Token Redis me store (blacklist)
  ↓
Cookie clear
  ↓
Same token future me BLOCK

🧱 Redis Setup (Node.js)
📦 Install Redis Package
npm install redis

🔌 Redis Connection (redis.js)
const { createClient } = require("redis");

const client = createClient({
  username: "default",
  password: "YOUR_REDIS_PASSWORD",
  socket: {
    host: "YOUR_REDIS_HOST",
    port: YOUR_REDIS_PORT,
  },
});

client.on("connect", () => {
  console.log("Redis connected");
});

client.on("error", (err) => {
  console.log("Redis error", err);
});

module.exports = client;

🔐 JWT Login (Token Create)
const token = jwt.sign(
  { _id: user._id, email: user.email },
  process.env.PASS_KEY,
  { expiresIn: "1h" }
);

res.cookie("token", token, {
  httpOnly: true,
  sameSite: "lax",
});

🚪 Logout Feature (Token Blacklist)
router.post("/logout", async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.send("Already logged out");
    }

    const payload = jwt.verify(token, process.env.PASS_KEY);

    // 🔥 Blacklist token in Redis
    await client.set(token, "logout");
    await client.expireAt(token, payload.exp);

    // Clear cookie
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
    });

    res.send("Logout SUCCESS!");
  } catch (err) {
    res.status(401).send("Invalid token");
  }
});

🧠 Important

token → key

"logout" → value

expireAt() → JWT ke expire time ke saath Redis expire

🔐 Protected Routes (Token Block Check)
🔥 Auth Middleware (MOST IMPORTANT)
const jwt = require("jsonwebtoken");
const client = require("../redis");

const auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.token || req.headers.authorization;

    if (!token) {
      return res.status(401).send("Token missing");
    }

    // 🚫 Redis blacklist check
    const isBlacklisted = await client.get(token);
    if (isBlacklisted) {
      return res.status(401).send("Token expired (logged out)");
    }

    // ✅ JWT verify
    const payload = jwt.verify(token, process.env.PASS_KEY);
    req.user = payload;

    next();
  } catch {
    res.status(401).send("Unauthorized");
  }
};

module.exports = auth;

👤 /userinfo Example
router.get("/userinfo", auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  res.send(user);
});

🧪 Testing (Postman)
✅ Correct Behavior

Login

Copy token

Logout

Paste token manually in header

Authorization: <token>


👉 Response:

Token expired (logged out)


✔ System secure hai

🎯 Advantages of Redis Token Blacklist

✅ Secure logout

✅ Instant token block

✅ No DB load

✅ Scalable (millions of users)

✅ Industry standard

❌ Without Redis (Problem)
Action	Result
Logout	Cookie clear only
Token reuse	❌ Allowed
Security	❌ Weak
🧠 Interview Ready Lines

JWT stateless hota hai isliye logout ke liye Redis token blacklist ka use kiya jata hai.

Redis fast in-memory store hai jo JWT logout aur session management ke liye best hai.