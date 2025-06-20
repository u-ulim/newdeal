const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const port = process.env.PROT || 7777;

const app = express();
// 라우터 가져오기
const indexRouter = require("./src/routes/indexRouter");
const postRouter = require("./src/routes/postRouter");
const userRouter = require("./src/routes/userRouter");

// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(cors());

//cors 미들웨어 설정 예정

// 라우터와 연동
app.use("/", indexRouter);
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);

// 서버 가동
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
