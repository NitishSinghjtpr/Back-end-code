📌 What is Authentication?

Authentication verifies who the user is.

Example:

Login with email & password

Server confirms identity

Server issues a token

Client uses token for future requests

🪪 JWT (JSON Web Token)
🔹 What is JWT?

JWT is a self-contained token used to securely transmit user information between client and server.

📦 It contains:

User identity

Token expiry

Signature (for security)

🧱 JWT Structure

JWT has 3 parts, separated by dots (.):

HEADER.PAYLOAD.SIGNATURE

1️⃣ Header
{
  "alg": "HS256",
  "typ": "JWT"
}

2️⃣ Payload
{
  "id": "userId123",
  "email": "user@gmail.com",
  "iat": 1700000000,
  "exp": 1700003600
}

3️⃣ Signature
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  SECRET_KEY
)


🔐 Secret key ensures token integrity.

✅ Why JWT?

✔ Stateless (no session storage)
✔ Fast & scalable
✔ Secure (signed)
✔ Perfect for REST APIs

⚠️ JWT is NOT encryption

❌ Anyone can decode JWT
✔ But cannot modify without secret key

🔑 Access Token
🔹 What is Access Token?

An Access Token is a short-lived JWT used to access protected APIs.

📌 Sent with every request:

Authorization: Bearer <access_token>

⏱ Access Token Lifetime

⏳ Short expiry (5–15 minutes)

⛔ Expires quickly for security

🧠 Use Case
Login → Access Token issued
API Request → Token verified
Valid → Access granted
Expired → 401 Unauthorized

🟢 Example (Node.js)
const accessToken = jwt.sign(
  { userId: user._id },
  process.env.PASS_KEY,
  { expiresIn: "15m" }
);

🔁 Refresh Token
🔹 What is Refresh Token?

A Refresh Token is used to generate a new Access Token without re-login.

🧠 Think of it as:

“Token to refresh your token”

⏱ Refresh Token Lifetime

⏳ Long-lived (7 days / 30 days)

🔐 Stored securely (HTTP-only cookie / DB)

🟢 Flow Example
Access Token expired ❌
↓
Client sends Refresh Token
↓
Server verifies Refresh Token
↓
New Access Token issued ✅

🟢 Example
const refreshToken = jwt.sign(
  { userId: user._id },
  process.env.REFRESH_SECRET,
  { expiresIn: "7d" }
);

🔄 Access vs Refresh Token (Comparison)
Feature	Access Token	Refresh Token
Lifetime	Short (minutes)	Long (days)
Used for	API access	Getting new access token
Sent with request	Yes	No
Storage	Memory / Cookie	HTTP-only Cookie / DB
Risk if stolen	Low	High
🔐 Security Best Practices

✅ Use short expiry for access tokens
✅ Store refresh tokens in HTTP-only cookies
✅ Rotate refresh tokens
✅ Use different secrets for access & refresh
❌ Never store tokens in plain localStorage (production)

🧩 Complete Authentication Flow (Real World)
1️⃣ User logs in
2️⃣ Server verifies credentials
3️⃣ Access Token + Refresh Token generated
4️⃣ Access Token → client (API requests)
5️⃣ Refresh Token → secure storage
6️⃣ Access Token expires
7️⃣ Refresh Token used
8️⃣ New Access Token issued

🚀 When to Use What?

✔ Small apps → JWT only
✔ Large apps → Access + Refresh Token
✔ Banking / secure apps → Refresh token rotation + blacklist

📌 Conclusion

JWT is the token format

Access Token is for API authorization

Refresh Token maintains long sessions securely

💡 Correct token strategy = Secure & scalable backend

⭐ Tip for GitHub README

Add architecture diagram later

Add Postman screenshots

Add .env.example

