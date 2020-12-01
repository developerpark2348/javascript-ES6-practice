'use strict';

// Array

// 1. Declaration 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //배열의 첫번째 아이템
console.log(fruits[1]); // 배열의 두번째 아이템
console.log(fruits[fruits.length - 1]); //배열의 마지막 아이템 가져오기

console.clear();
// 3. looping over an array
// print all fruits
//a. for
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index, array) => console.log(fruit, index, array)); 
//for each = 배열의 숫자만큼 함수를 반복함. 위는 함수 생략.

console.clear();
// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging 앞에 아이템을 넣기
fruits.unshift('strawberry', 'mango')
console.log(fruits);

// shift: remove an item from the benigiing 앞에 아이템을 없에기
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);

// Note!! shift, unsfhit are slower than pop, push 제일 뒤에서부터 앞으로 가기 때문에.

// splice: remove an item by index position
// 배열이름.splice(시작위치, 지울개수, 더 넣을 항목...);
// 시작위치, 더 넣을 항목만 지정후 지울개수를 넣지않고 삽입만 할수도있음.
fruits.push('strawberry', 'peach', 'lemon');
console.log(fruits);
//  fruits.splice(1) 시작 위치만 지정한다면, 시작 위치부터 모든 데이터를 제거해버림.
fruits.splice(1, 1);    // 시작위치1칸부터 1개를 없엔다.
console.log(fruits);
fruits.splice(1, 1, 'watermelon', 'gyul');  //삭제 위치부터 지정한 수박과 귤을 넣는다.
console.log(fruits);

// combine two arrays 배열 두개 합치기. const 새로운배열이름 = 기존배열.concat(원하는배열)
const fruits2 = ['red', 'blue'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();
// 5. Searching 검색
// find the index
// 배열이름.indexOf('항목이름'); 해당 항목이 본 배열중 어디 있는지를 판별함. 없을시 -1 출력
// 배열이름.includes('항목이름'); 해당 항목이 배열내에 있는지를 판별함.
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));

// includes
console.log(fruits.includes('apple'));

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));       //첫번째 해당하는 값을 만나면 리턴하게됨.
console.log(fruits.lastindexOf('apple'));   //마지막에 해당하는 값을 리턴하게됨.

