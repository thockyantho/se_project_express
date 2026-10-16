const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const {
  BAD_REQUEST,
  UNAUTHORIZED,
  NOT_FOUND,
  SERVER_ERROR,
  CONFLICT,
} = require("../utils/errors");

// GET /users
const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.status(200).send(users))
    .catch((err) => {
      console.error(err);
      return res.status(SERVER_ERROR).send({
        message: "An error has occurred on the server.",
      });
    });
};

const createUser = (req, res) => {
  const { name, avatar, email, password } = req.body;

  if (!email || !password) {
    return res
      .status(BAD_REQUEST)
      .send({ message: "Email and password are required" });
  }

  return bcrypt
    .hash(password, 10)
    .then((hash) =>
      User.create({
        name,
        avatar,
        email,
        password: hash,
      })
    )
    .then((user) => {
      const userObject = user.toObject();
      delete userObject.password;

      res.status(201).send(userObject);
    })
    .catch((err) => {
      console.error(err);

      if (err.code === 11000) {
        return res.status(CONFLICT).send({
          message: "A user with this email already exists.",
        });
      }

      if (err.name === "ValidationError") {
        return res.status(BAD_REQUEST).send({
          message: err.message,
        });
      }
      return res.status(SERVER_ERROR).send({
        message: "An error has occurred on the server.",
      });
    });
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(BAD_REQUEST)
      .send({ message: "Email and password are required" });
  }

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, "some-secret-key", {
        expiresIn: "7d",
      });
      res.send({ token });
    })
    .catch(() => {
      res.status(UNAUTHORIZED).send({ message: "Incorrect email or password" });
    });
};

const getUser = (req, res) => {
  const userId = req.user._id;

  User.findById(userId)
    .orFail()
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      console.error(err);
      if (err.name === "DocumentNotFoundError") {
        return res.status(NOT_FOUND).send({ message: "User not found" });
      }
      if (err.name === "CastError") {
        return res.status(BAD_REQUEST).send({ message: "Invalid user ID" });
      }
      return res.status(SERVER_ERROR).send({
        message: "An error has occurred on the server.",
      });
    });
};

const updateUser = (req, res) => {
  const { name, avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, avatar },
    { new: true, runValidators: true }
  )
    .orFail()
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      console.error(err);

      if (err.name === "ValidationError" || err.name === "CastError") {
        return res.status(BAD_REQUEST).send({ message: err.message });
      }

      if (err.name === "DocumentNotFoundError") {
        return res.status(NOT_FOUND).send({ message: "User not found" });
      }

      return res.status(SERVER_ERROR).send({
        message: "An error has occurred on the server.",
      });
    });
};

module.exports = { getUsers, createUser, getUser, login, updateUser };
