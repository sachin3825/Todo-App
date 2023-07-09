const express = require("express");
const app = express();

// loading config from env
require("dotenv").config();

const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());

// import routes for TODO api

const todoRoutes = require("./routes/todos");

// mount the todo API routes
app.use("/api/v1", todoRoutes);

// start server
app.listen(PORT, () => {
  console.log(`Server started at sucessfully ${PORT}`);
});

// conncet to the database
const dbconnect = require("./config/database");
dbconnect();

// default route
app.get("/", (req, res) => {
  res.send(`<h1> HOME PAGE </h1> `);
});
