'use strict';
//Object-oriented programming
//class: template : 붕어빵 틀
//object: instance of a class
//JavaScript classes
// - introduced in ES6
// - syntical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    //constructor 생성자
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak() {
    console.log(`${this.name}: hello!`);
    }
}

const park = new Person('park', 20);
console.log(park.name);
console.log(park.age);
park.speak();

//2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0) {
            throw Error('age can not be negative');
        }
        this._age = value;
    }
}

const user1 = new User('Steve', 'Job', 3);
console.log(user1.age);

// 3. Fields (public, private)
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Inheritance 상속
// a way for one class to extend another class.
class Shape {
    constructor(width, height,color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} //shape클래스를 가져와서 같은 속성을 그대로 사용한다.
class Triangle extends Shape {
    draw() {
        super.draw(); //부모의 draw함수 출력
        console.log('try')
    }
    getArea() {
        return (this.width * this.height) /2; //Shape클래스내의 getArea를 상황에 맞게 바꿔줌.
    }

    toString() {
        retrun `Triangle: color: ${this.color}`
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);    //rectanlge이 Rectangle클래스를 이용하여 만들어 졌는지를 판단함.
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);