/*
dotenv는 Node.js 애플리케이션에서 환경 변수를 쉽게 관리할 수 있도록 
해주는 라이브러리입니다. 일반적으로 환경 변수를 .env 파일에 정의하고, 
dotenv 패키지를 사용해 이 파일의 변수를 애플리케이션에 로드하는 방식으로 사용합니다. 
이는 API 키, 데이터베이스 연결 정보 등 민감한 정보를 코드에서 분리하고, 
환경에 따라 설정을 쉽게 변경할 수 있게 해줍니다.
----------------------------
npm i dotenv --s  
설치후
.env 파일을 생성하자
-----------------------
# .env 파일 내용
PORT=3000
DATABASE_URL=mongodb://localhost:27017/mydatabase
SECRET_KEY=mysecretkey
----------------------------
**주의사항***
.env 파일 보안: .env 파일에는 민감한 정보(API 키, 데이터베이스 비밀번호 등)가 
포함될 수 있으므로, 이 파일을 절대 버전 관리 시스템(Git 등)에 커밋하지 말아야 합니다. 
.gitignore 파일에 .env를 추가해 예기치 않게 커밋되는 것을 방지할 수 있습니다.
--------------
# .gitignore 파일 내용
.env
-----------
환경에 따른 설정 관리: 개발, 테스트, 프로덕션 환경에 따라 다른 .env파일
.env.development, .env.test, .env.production 등으로 파일을 나누고, 
각각의 환경에 맞는 설정을 관리할 수 있습니다.
*/
// app.js

const dotenv = require('dotenv');
dotenv.config(); // dotenv를 사용하여 .env 파일에서 환경 변수를 로드하고 'process.env'객체에 추가한다.
//process.env를 이용해 환경변수를 쉽게 접근할 수 있다.

const express = require('express');
const app = express();

// 환경 변수 사용
const port = process.env.PORT || 3000; // PORT 환경 변수가 설정되지 않은 경우 3000을 기본값으로 사용

// 데이터베이스 URL과 시크릿 키 가져오기
const databaseUrl = process.env.DATABASE_URL;
const secretKey = process.env.SECRET_KEY;

// 서버 설정
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 서버 시작
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
    console.log(`Database URL is: ${databaseUrl}`);
    console.log(`Secret Key is: ${secretKey}`);
});
