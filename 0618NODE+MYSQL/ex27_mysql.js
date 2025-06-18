//ex 27_mysql.js
// mysql 모듈 설치

// mysql2 모듈 설치 => Promise를 지원 async/await 사용 가능

// npm i mysql => callback fn
// npm i mysql2 => promise

const express = require("express");
const mysql = require("mysql");

// db 연결 정보 => .env
const conn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "eduDB",
  user: "ezen",
  password: "1234",
});

console.log(conn);

// DB 연결

conn.connect((err) => {
  if (err) {
    console.error("MySQL 연결 시도 중 에러: ", err);
    return;
  }
  console.log("MySQL 연결 성공");
});

// 쿼리 실행
conn.query("select * from members order by id desc", (err, result) => {
  if (err) {
    console.error("쿼리 실행 에러 :", err);
    return;
  }
  //   console.log(result);
  //   result.array.forEach((element) => {
  //     console.log(element.id, element.name, element.email, element.role);
  //   });

  for (let i = 0; i < result.length; i++) {
    console.log(result[i].id, result[i].name, result[i].email, result[i].role);
  }
});

// DB 연결 종료
// conn.end();
