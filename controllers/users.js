const User = require("../models/users.js");

//GET /users
const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

module.exports = { getUsers };
