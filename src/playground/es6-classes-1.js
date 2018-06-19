
class Person {
    _fullName;
    _age;

    constructor(fullName, age=0) {
        this._fullName = fullName;
        this._age = age;
    }

    getGreeting() {
        //return 'Yo! This is ' + this._fullName;
        return `Yo! This is ${this._fullName}.`;
    }

    getDescription() {
        return `${this._fullName} is ${this._age} year(s) old.`;
    }
}

class Student extends Person {
    _major;

    constructor(fullName, age, major) {
        super(fullName, age);
        this._major = major;
    }

    hasMajor() {
        return !!this._major;
    }

    getDescription() {
        let description = super.getDescription();
        
        return `${description}` + this.hasMajor? `They studied ${this._major}.`: '';
    }

}

class Traveler extends Person {
    _homeLocation;

    constructor(fullName, age, homeLocation) {
        super(fullName, age);
        this._homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        return greeting += ` I'm visiting from ${this._homeLocation}.`;
    }
}

const me = new Person('David Garcia', 28);
const student = new Student('David Garcia', 28, 'Computer Science');
const traveler = new Traveler('John Doe', 30, 'Kualalumpur');
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(student.getDescription());
console.log(traveler.getGreeting());