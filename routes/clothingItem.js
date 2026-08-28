const router = require("express").Router();

const { createItem } = require("../controllers/clothingItem.js");

//CRUD

//Create
router.post("/", createItem);

module.exports = router;
