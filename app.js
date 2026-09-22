const express = require("express");
const mongoose = require("mongoose");

const app = express();
const { PORT = 3001 } = process.env;

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(console.error);

const routes = require("./routes");

app.use(express.json());

app.use((req, res, next) => {
  req.user = {
    _id: "6aa9d9836b0e13d7668b68dd",
  };

  next();
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
