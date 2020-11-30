// Function
// -fundamental bulding block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) 
// { body... reutrn;}
//one function === one thing 하나의 함수 한가지의 역할
// naming: do something, comand, verb
// e.g. createCarAndPoint -> createCard, createPoint
// function is object in Js
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('I wanna be a genius');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}

const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable 전역 변수
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable 지역 변수
    console.log(globalMessage);
}
printMessage();

// 6. Reuturn a value
function sum(a, b) {
    return a + b;
}
const result = sum(1 , 2); //3
console.log(`sum: ${sum(1 , 2)}`);

// 7. Early return, early exit

// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

//First-class function
//functions are treated like any other variable 다른 변수와 마찬가지로
//can be assigned as a value to variable 변수에 할당이 가능하며
//can be passed as an argument to other functions.
//can be returned by another function 함수안에 들어갈 수 있다.

//1. Function expression
//a function declaration can be called earlier than it is  defined. (hoisted)
//a function expression is created when the execution reaches it.
const print = function () {     //이름없는 함수 = anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

//anonymous function
const printYes = function ()  {
    console.log('yes!');
};

//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous 항상 함수의 이름을 안 정하는 어나니머스 함수임.
const simplePrint = function () {
    console.log('simplePrint!');
};
// const simplePrint = () => console.log('simplePrint!'); 위의함수 애로우 함수

const add = (a, b) => a + b;  // a b 입력값을 받아 a + b 를 리턴하는 함수를 arrow function으로 만든것.

const simpleMultiply = (a, b) => {
    //do something 블록을 사용했을경우 return함수 필수로 사용.
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

function calculate(command, a, b) {
    if (command === add) {
        return a + b;
    } 
    else if (command === substract) {
        return a - b;
    }
    else if (command === divide) {
        return a / b;
    }
    else if (command === multiply) {
        return a * b;
    }
    else if (command === remainder) {
        return a % b;
    }
}

calculate(substract, 5, 6);