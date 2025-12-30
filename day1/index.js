const express = require("express");
const User = require("./database/databade");
const app = express();

const port = 4000;

app.use(express.json());

app.get("/register", (req, res) => {
  res.send("Welcome to the register page");
});

app.post("/home", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send("Registered successfully"+user);
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
