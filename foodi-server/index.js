const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
require('dotenv').config()

// middleware
app.use(cors());
app.use(express.json());

// mongodb configuration using mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@foodi-client.lg435bm.mongodb.net/foodi-client?retryWrites=true&w=majority&appName=foodi-client`
  )
  .then(
    console.log("MongoDB connected successfully")
  )
  .catch((error) => console.log("Error connecting to MongoDB", error));

// import routes
const menuRoutes = require('./api/routes/menuRoutes')
const cartRoutes = require('./api/routes/cartRoutes')
app.use('/menu', menuRoutes)
app.use('/carts', cartRoutes)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
