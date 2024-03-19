// Authentication middleware to get username and password from the header
const authorMiddleware = (req, res, next) => {
  const authorHeader = req.headers["authorization"];
  if (authorHeader) {
    const [username, password] = Buffer.from(
      authorHeader.split(" ")[1],
      "base64"
    )
      .toString()
      .split(":");
    req.username = username;
    req.password = password;
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorMiddleware;