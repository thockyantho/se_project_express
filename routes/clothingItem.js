const router = require("express").Router();

const {
  createItem,
  getItems,
  updateItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItem.js");

//CRUD

//Create
router.post("/", createItem);

//Read
router.get("/", getItems);

//Update
router.put("/:itemId", updateItem);

//Like
router.put("/:itemId/likes", likeItem);

//Unlike
router.delete("/:itemId/likes", dislikeItem);

//Delete
router.delete("/:itemId", deleteItem);

module.exports = router;
