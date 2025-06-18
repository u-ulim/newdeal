// ex26_bodyParser.js
const express = require('express')
const path = require('path')
require('dotenv').config()
const port = process.env.PORT ||3333;

const app =express();

//미들웨어 설정
app.use(express.json()) //json 데이터를 자동으로 파싱하여 req.body에 저장한다
//URL 인코딩된 데이터를 파싱하는 미들웨어 (form통해서 보내는 경우)
app.use(express.urlencoded({extended: true}))
//extended: true를 주면 qs 모듈이용해서 파싱, false주면 querystring모듈 사용
app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'public','form.html'))
})
//get방식 요청 데이터 req.query이용해 닉네임, 비번 출력하기
app.get('/login',(req, res)=>{
    const {nick, passwd} = req.query;
    console.log(nick, passwd);
    res.send(`<h1>GET 닉네임: ${nick}, 비밀번호: ${passwd}</h1>`);
})

//post방식 요청 데이터 req.body이용해 닉네임, 비번 출력하기
app.post('/login',(req, res)=>{
    const {nick, passwd} =req.body;
    res.send(`<h1>POST 닉네임: ${nick}, 비밀번호: ${passwd}</h1>`);
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
    
})