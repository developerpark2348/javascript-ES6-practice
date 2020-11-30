// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };의 집합체이다.

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax 오브젝트를 만드는 방법1
const obj2 = new Object(); // 'object constructor' syntax 오브젝트를 만드는 방법2

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

ellie.hasJob = true; //뒤 늦게 추가할 수 있음.

delete ellie.hasJob; //can delete properties later
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string ' '표시가 필요함.
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);      //obj.key라면 작동x 즉 들어갈 값을 예상하지 못 할 경우에 사용
}
printValue(ellie, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = Person('elile', 30);
console.log(person4);
function Person(name, age) {
    return {
        name: name, // 앞의 name:과 뒤의 name,이 같을시 name,만 적어도 동작
        age: age, // 앞의 age:과 뒤의 age,이 같을시 age,만 적어도 동작
    };
}

// 4. Constructor Function - 대체적으로 위와같이 사용x 밑과같이 사용함
function MakePerson(name, age) {
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence check (key in obj) 키가 오브젝트내에 있는지를 판단.
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) {
    console.log(key);
}

// for (value of iterable) 배열내의 항목들을 출력하는 방법
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length ; i ++) {
    console.log(array[i]);
}

for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

console.clear();
const user4 = {};
Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //후에 나오는 blue가 출력되게됨. (값을 덮어 씌우기 때문에.)
console.log(mixed.size);