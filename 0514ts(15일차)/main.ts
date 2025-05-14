// number
let number: number;

let integer: number = 6;
let float: number = 1.2345;

let fruit: string[] = ["사과", "포도"];
let names: Array<string> = ["홍길동"];

let num: number[] = [1, 2, 3, 4, 5];
let num2: Array<number> = [10, 20, 3];

// 여러가지 타입을 가지는 배열 (유니언 타입)
let arr1: (string | number)[] = ["짱구"];

// interface
interface Person {
  name: string;
  age: number;
}

const user: Person = { name: "홍길동", age: 20 };

// 확장
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const beer1: Bear = {
  name: "벌",
  honey: true,
};
