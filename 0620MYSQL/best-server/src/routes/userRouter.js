// postRouter.js
const express = require("express");
const router = express.Router();

// '/api/posts/'

router.get("/", (req, res) => {
  res.send("<h1>User</h1>");
});

module.exports = router;
