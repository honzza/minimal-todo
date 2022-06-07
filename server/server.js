const express = require("express");
const app = express();
const cors = require("cors");
const Todo = require("./models/todo");

// Config
const PORT = process.env.PORT || 5000;
const connectDB = require("./db");

// Set up cors
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST",
  })
);

app.use(express.json());

// // Routes
app.post("/store-todo", (req, res) => {
  console.log(req.body);
  const todo = new Todo({ text: req.body.text });
  todo.save();
  res.status(200).json({ message: `200: Todo ${req.body.text} created` });
});
// Unknown route error
app.use((req, res) => {
  res.status(404).send("404: Could not find this route");
});

// Error handler
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An uknown error occurred!" });
});

// Database connection
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
