// ex02_console.js
//전역 객체 : console, process, exports ..
console.log('정수 출력하기: %d', 555);
console.log('실수 : %d',3.141592);
console.log('실수 : %s', (3.141592).toFixed(2));//소수점 2자리까지 출력
console.log('문자열: %s','Hello World~');
const obj ={
    num:1,
    name:'홍길동',
    age:22
}
console.log('JSON객채: %j', obj);
console.log('%d %%할인',30);

console.table([obj, {num:2,name:'김영희',age:21}]);
//테이블 형식으로 출력

console.time('sum');//label 문자열
let result=0;
for(let i=0;i<10000;i++){
    result +=i;
}
console.timeEnd('sum');
console.log(`1~10000까지의 누적 합: %d`, result);


console.error('에러 출력 (x)');
console.warn('경고 출력 (!)');
console.debug('디버깅 정보');
console.info('정보 출력');

console.assert(1==2)//검증할 때 사용 assertion  조건이 false일때만 메시지를 출력
console.assert(obj.name=='홍길동');
