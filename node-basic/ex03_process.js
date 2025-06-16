// ex03_process.js
// process 객체:  프로그램과 프레세스 관련 기능을 수행
// 속성
// argv
console.log("argv 속성의 파라미터 수 : $d", process.argv.length);
console.log(process.argv);
// node ex03_process.js 99 88 77

console.log(process.argv[2]);

process.argv.forEach((val, i) => {
  console.log(`${i} : ${val}`);
});

// process.env :운영체제에 의해 설정된 환경 변수가 들어감
console.log("******************************");
