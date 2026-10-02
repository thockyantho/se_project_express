const router = require("express").Router();
const clothingItem = require("./clothingItem");
const { createUser, login } = require("../controllers/users");
const { NOT_FOUND } = require("../utils/errors");

const userRouter = require("./users");

router.post("/signup", createUser);
router.post("/signin", login);

router.use("/users", userRouter);
router.use("/items", clothingItem);

router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Requested resource not found" });
});

module.exports = router;
