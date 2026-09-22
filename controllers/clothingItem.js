const ClothingItem = require("../models/clothingItem");
const { BAD_REQUEST, NOT_FOUND, SERVER_ERROR } = require("../utils/errors");

const createItem = (req, res) => {
  const { name, weather, imageUrl } = req.body;

  ClothingItem.create({ name, weather, imageUrl, owner: req.user._id })
    .then((item) => res.status(201).send(item))
    .catch((err) => {
      console.error(err);
      if (err.name === "ValidationError") {
        return res.status(BAD_REQUEST).send({ message: err.message });
      }
      return res.status(SERVER_ERROR).send({
        message: "An error has occurred on the server.",
      });
    });
};

const getItems = (req, res) => {
  ClothingItem.find({})
    .then((items) => res.status(200).send({ data: items }))
    .catch((err) => {
      console.error(err);
      return res.status(SERVER_ERROR).send({
        message: "An error has occurred on the server.",
      });
    });
};

const updateItem = (req, res) => {
  const { itemId } = req.params;
  const { imageUrl } = req.body;

  ClothingItem.findByIdAndUpdate(
    itemId,
    { $set: { imageUrl } },
    { new: true, runValidators: true }
  )
    .orFail()
    .then((item) => res.status(200).send({ data: item }))
    .catch((err) => {
      console.error(err);

      if (err.name === "ValidationError" || err.name === "CastError") {
        return res.status(BAD_REQUEST).send({
          message: "Invalid data",
        });
      }

      if (err.name === "DocumentNotFoundError") {
        return res.status(NOT_FOUND).send({
          message: "Item not found",
        });
      }
      return res.status(SERVER_ERROR).send({
        message: "An error has occurred on the server.",
      });
    });
};

const deleteItem = (req, res) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndDelete(itemId)
    .orFail()
    .then((item) => res.status(200).send(item))
    .catch((err) => {
      console.error(err);

      if (err.name === "CastError") {
        return res.status(BAD_REQUEST).send({
          message: "Invalid item ID",
        });
      }

      if (err.name === "DocumentNotFoundError") {
        return res.status(NOT_FOUND).send({
          message: "Item not found",
        });
      }

      return res.status(SERVER_ERROR).send({
        message: "An error has occurred on the server.",
      });
    });
};

const likeItem = (req, res) => {
  ClothingItem.findByIdAndUpdate(
    req.params.itemId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .orFail()
    .then((item) => res.status(200).send(item))
    .catch((err) => {
      console.error(err);

      if (err.name === "CastError") {
        return res.status(BAD_REQUEST).send({
          message: "Invalid item ID",
        });
      }

      if (err.name === "DocumentNotFoundError") {
        return res.status(NOT_FOUND).send({
          message: "Item not found",
        });
      }

      return res.status(SERVER_ERROR).send({
        message: "An error has occurred on the server.",
      });
    });
};

const dislikeItem = (req, res) => {
  ClothingItem.findByIdAndUpdate(
    req.params.itemId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .orFail()
    .then((item) => res.status(200).send(item))
    .catch((err) => {
      console.error(err);

      if (err.name === "CastError") {
        return res.status(BAD_REQUEST).send({
          message: "Invalid item ID",
        });
      }

      if (err.name === "DocumentNotFoundError") {
        return res.status(NOT_FOUND).send({
          message: "Item not found",
        });
      }

      return res.status(SERVER_ERROR).send({
        message: "An error has occurred on the server.",
      });
    });
};

module.exports = {
  createItem,
  getItems,
  updateItem,
  deleteItem,
  likeItem,
  dislikeItem,
};
