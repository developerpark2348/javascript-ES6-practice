// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();   //배열이름.join('): 배열을 string으로 전환하며      배열사이 '으로 구별을 시켜주는 함수     배열에서 string
    console.log(result);
}

  // Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');   // 배열이름.split(',', x): string을 ,로 구별하며 배열로 만들어주는 함수로서 x개수만큼 앞에서부터 출력.      string에서 배열
    console.log(result);
}

  // Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();     //배열자체의 순서를 거꾸로 만들어주는 함수.
    console.log(result);
    console.log(array);     //result뿐만아니라 array의 본 순서도 거꾸로 바뀜.
}

  // Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);   //slice : 2번째부터 5번쨰 바로전(4번째)까지의 배열을 출력함.    splice = 배열 자체를 slice = 배열에서 꺼내옴.
    console.log(result);
    console.log(array);
}

class Student {
    constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

  // Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);       //find : find(함수(출력값,) reutrn 조건문(boolean으로 T 나 F가 나오게 ))하나가 참일경우 바로 출력함. 위에선 함수를 바로 쓰기에 함수를 생략.
}