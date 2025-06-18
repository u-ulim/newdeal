const express = require("express");

// npm i mysql2

const mysql = require("mysql2");
const port = 5555;
const app = express();

// 데이터베이스 커넥션 풀 설정 (mysql2)
// 즉시 실행함수

// 데이터베이스 커넥션 풀 설정(mysql2)

const pool = mysql
  .createPool({
    host: "localhost",
    port: 3306,
    database: "eduDB",
    user: "ezen",
    password: "1234",
    connectionLimit: 10, // ✅
  })
  .promise(); // Promise 기반으로 변환

// req.body는 구조분해 할당 할 수 없는 상태이므로, 미들웨어로 파싱할 수 있게 해야한다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 회원가입
app.post("/api/users", async (req, res) => {
  // post 방식 => req.body, get 방식 => req.query, '/api/users/100' => req.params
  const { name, email, password } = req.body; // 미들웨어로 파싱할 수 있게 해야한다.
  console.log(name, email, password);
  // 유효성 체크 (not null 제약 조건을 가진 필드들)
  if (!name || !email || !password) {
    return res.status(400).json({
      result: "fail",
      message: "이름, 이메일, 비밀번호는 반드시 입력해야 합니다.",
    });
  }

  // db 연동
  try {
    const sql = `insert into members(name, email, password)
      values(?, ?, ?)
        `;

    const [result] = await pool.query(sql, [name, email, password]);

    console.log(result);

    res.json({ result: "success", message: "회원가입 성공" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ result: "fail", message: "DB에러 : " + error.message });
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버 시작 : http://localhost:${port}`);
});
