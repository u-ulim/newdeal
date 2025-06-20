// postRouter.js
const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// '/api/posts/'

// => 컨트롤러로 넘깃 것
// router.get("/", (req, res) => {
//   res.send("<h1>Post</h1>");
// });

//get /api/posts
router.get("/", postController.listPost);

// post /api/posts : 포스트 글쓰기(C) - 파일업로드 처리 필요
router.post("/", postController.createPost);

module.exports = router;
