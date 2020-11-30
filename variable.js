// 1. Use strict
// added in ES 5
//use this for Valina Javascript.
'use strict';

// 2. Variable rw(read/write) 변수
// let (added in ES6)
let globalName = 'global name';
{
let name = 'park';
console.log(name);
name = 'hello';
console.log(name);
} //블록 안에서만 허용되는 변수 즉 밑의 name은 console에 출력x
console.log(name);
console.log(globalName);

// var (don't ever use this)
// var hoisting (move declaration from bottom to top 어디에 선언한지에 상관없이 가장 위로 선언을 끌어 올려주다.)
//has no block scope(블록 선언이 없다.)
{
age = 4;
var age;
}
console.log(age);

//3. Constants r(read)고정 변수  (한번 지정하면 바꿔지지 않는 변수)
// use const whenever possible.
// only use let if variable needs to change
const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types: primitive types, frozen object( i.e, object.freeze()) (Ellie const의 Ellie변수 이름은 변경 불 가능함.)
//Mutable data types: all objects by default are mutable in JS(Ellie const변수안의 내용은 변경 가능함.)
//favor immutable data type always for a few reasons:
// - security
// -thread safety
// -reduce human mistakes

//4. Variable types 변수 선언형
//primitive, singlie item: number, string, boolean, null, undefiedn, symbol
//object, box container
//funtion, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numeric values: infinity, negativeInfinity, not a number
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// `을 사용하여 중간에 문자열 삽입가능 위와같이

//boolean
//false: 0; null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; // false;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);