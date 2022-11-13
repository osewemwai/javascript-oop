console.log("Hello World from index.js");

// http://localhost:5500/

// Professor and Student

// Class in javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduction() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}
let person1 = new Person("John", 30);
console.log(person1);
console.log(person1.introduction());

/* 
class Proffesor
    properties: name, age, subject
    constructor(name, age, subject)
    methods: introduction, teach
*/

class Professor extends Person {
    
    introduction() {
        console.log(`My name is ${this.name} and I am ${this.age} and I teach ${this.subject}`);
    }
    teach() {
        console.log(`Today we are learning about ${this.subject}`);
    }
}

console.log(new Professor("John", 32, "Math"));

/* class Student
    properties: name, age, subject
    constructor(name, age, subject)
    methods: introduction, study
 */
class Student extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;

    }
    
    study(){
        console.log(`Today we are studying about ${this.subject}`);
    }
}

console.log(new Student("Makululu", 48, "Math"));


// Encaapsulation

/* 
    class Person
        properties: name, age
        constructor(name, age)
        methods: introduction
*/
