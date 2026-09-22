const router = require("express").Router();

const {
  createItem,
  getItems,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItem");

// CRUD

// Create
router.post("/", createItem);

// Read
router.get("/", getItems);

// Like
router.put("/:itemId/likes", likeItem);

// Unlike
router.delete("/:itemId/likes", dislikeItem);

// Delete
router.delete("/:itemId", deleteItem);

module.exports = router;
