const obj = require('./sample2')
console.log(obj.calc.plus(2,8));
console.log(obj.calc.minus(2,8));

//square()/ 
console.log(obj.area.square(5));
// obj.print.printStar(); [x]
obj.print() //index.js에서 print로 받아 내보냄. 