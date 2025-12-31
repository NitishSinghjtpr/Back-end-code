const { log } = require("console");
const express = require("express");
const app = express();
//create CRUD

//database
const FoodMenu = [
  { id: 1, food: "Chowmein", category: "veg", price: "100" },
  { id: 2, food: "butter nam", category: "veg", price: "50" },
  { id: 3, food: "chicken chilli", category: "non-veg", price: "400" },
  { id: 4, food: "paneer masala", category: "veg", price: "250" },
  { id: 5, food: "paneer chilli", category: "veg", price: "250" },
  { id: 6, food: "mutton thali", category: "non-veg", price: "500" },
  { id: 7, food: "veg thali", category: "veg", price: "300" },
  { id: 8, food: "nonveg thali", category: "non-veg", price: "400" },
  { id: 9, food: "mushroom", category: "veg", price: "200" },
  { id: 10, food: "paneer paratha", category: "veg", price: "150" },
  { id: 11, food: "Aalu paratha", category: "veg", price: "100" },
];
//user jo bhi add karega idhar aayega
app.use(express.json());
const AddToCart = [];

app.get("/food", (req, res) => {
  // const data=req.params.body;
  console.log(data);

  res.status(200).send({ FoodMenu });
});
app.patch("/food/:id", (req, res) => {
  const id = req.body.id;
  const fooddata = FoodMenu.find((item) => item.id === id);
  if (fooddata) {
    if (req.body.food) fooddata.food = req.body.food;
    if (req.body.category) fooddata.category = req.body.category;
    if (req.body.price) fooddata.price = req.body.price;
    res.send("successfully changed");
  } else {
    res.send("data not found");
  }
});

app.post("/admin", (req, res) => {
  //Add item into food menu
  //Authentication karne ki kya ye admin hi hai
  //dummy code
  const token = "ABCDEF";
  const Access = token === "ABCDEF" ? 1 : 0;

  if (Access) {
    FoodMenu.push(req.body);
    res.status(201).send("Item added successfully");
  } else {
    res.status(404).send("item can not be added");
  }
});

app.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = FoodMenu.findIndex((item) => item.id === id);
  FoodMenu.splice(index, 1);
  res.send("delete successfully");
});
//card section code

//add to cart

app.post("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const foodItem = FoodMenu.find(item=> item.id === id);

  if (foodItem) {
    AddToCart.push(foodItem);
    res.status(200).send("Item added successfully");
  } else {
    res.send("Item out of stock");
  }
});

//delete from cart
app.delete("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = AddToCart.findIndex(item => item.id === id);

  if (index !== -1) {
    AddToCart.splice(index, 1);
    res.status(200).send("Item removed from cart");
  } else {
    res.status(404).send("Item not found in cart");
  }
});

// app.delete("/user/:id",(req,res)=>{
//     const id = parseInt(req.params.id);
//     const index=AddToCart.findIndex(item=>item.id===id);
//     if(!index){
//         res.send("item not present");
//     }
//     else if
//     AddToCart.splice(index,1)
//     res.send("item deleted successfully")
// })


//view from cart
app.get("/user", (req, res) => {
    if (AddToCart.length==0)
        res.send("Cart is Empty")
    else
        res.send(AddToCart);
});

app.listen(8080, () => {
  console.log("server listing at prot 8080");
});
