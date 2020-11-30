// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder(나머지)
console.log(2 ** 3); // exponetiation(제곱)

// 3. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 4. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 5. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) finds the first truthy value (처음으로 true값을 찾으면 바로 멈춤)
console.log(`or: ${value1 || value2 || check()}`);

// && (and) finds the first false value (처음으로 false값을 찾으면 바로 멈춤)
console.log(`and: ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('A');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (대충 타입이 달라도 봐줌)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion (대충 타입이 다르면 봐주지 않음)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1
console.log(ellie1 == ellie2);  //false(각각 다른 곳에 저장)
console.log(ellie1 === ellie2); //false(각각 다른곳에 저장)
console.log(ellie1 === ellie3); //true

//equality - puzzler
console.log(0 == false); //t
console.log(0 === false); //f
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if ( name === 'ellie') {
    console.log('Welocme, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
};

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no'); //앞의 조건문이 맞으면 ?뒤의 'yes'출력 틀리면 'no'출력

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chorme':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('love you!');
        break;
    };

for(let i = 0; i < 11; i++) {
    if(i % 2 !== 0) {
        continue;
    } else  {
        console.log(`q1. ${i}`);
    }
}

for(let i = 0; i < 11; i++) {
    if(i > 8) {
        break;
    } else {
        console.log(`q2. ${i}`);
    }
}

