const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
require('dotenv').config()

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
const userRoutes = require('./api/routes/userRoutes')

app.use('/menu', menuRoutes)
app.use('/carts', cartRoutes)
app.use('/users', userRoutes)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
