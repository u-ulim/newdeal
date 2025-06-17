const http = require("http");
const fs = require("fs");
//npm install 설치할 모듈


const path = require("path");
http
  .createServer((req, res) => {
    if (req.url == "/") {
      const fileName = path.join("public", "tourSample.html");
      try {
      } catch (error) {
        console.log(err);
        res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
        res.end(error.message);
      }
    }
  })
  .listen(3333, () => {
    console.log(`http://localhost:3333`);
  });
