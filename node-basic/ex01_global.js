// ex01_global.js
// 전역 객체 : global
console.log(global);
console.log("************");

// global.setTimeout(() => {
//   console.log("1초 후에 실행");
// }, 1000);

global.var = "전역변수";

global.func = () => {
  console.log("Global Function");
};

console.log(global);
console.log(global.var);
func();

// 전역변수: __filename, __dirname
console.log(`현재 실행 중인 파일명: %s`, __filename);
console.log(`현재 실행 중인 파일명: %s`, __filename);


