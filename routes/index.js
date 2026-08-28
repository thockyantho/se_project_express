const router = require("express").Router();
const clothingItem = require("./clothingItem.js");

const userRouter = require("./users.js");

router.use("/users", userRouter);
router.use("/items", itemRouter);

router.use((req, res) => {
  res.status(500).send({ message: "Router not found" });
});

module.exports = router;
