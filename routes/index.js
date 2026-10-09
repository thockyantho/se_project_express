const router = require("express").Router();
const clothingItem = require("./clothingItem");
const { getItems } = require("../controllers/clothingItem");
const { createUser, login } = require("../controllers/users");
const { NOT_FOUND } = require("../utils/errors");
const auth = require("../middlewares/auth");

const userRouter = require("./users");

router.post("/signup", createUser);
router.post("/signin", login);
router.get("/items", getItems);

router.use("/users", auth, userRouter);
router.use("/items", auth, clothingItem);

router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Requested resource not found" });
});

module.exports = router;
