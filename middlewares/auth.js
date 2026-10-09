const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).send({
      message: "Authorization required",
    });
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, "some-secret-key");

    req.user = payload;

    return next();
  } catch (err) {
    return res.status(401).send({
      message: "Authorization required",
    });
  }
};

module.exports = auth;
