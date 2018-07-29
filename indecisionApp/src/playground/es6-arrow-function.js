// let getFirstName = (name) => name.split(' ')[0];

// const name = 'David Garcia';

// console.log(getFirstName(name));

const user = {
    name: 'David',
    cities: ['New York', 'London', 'Barcelona'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => {
            console.log(this.name + ' lived in ' + city);
        });
    }
}

user.printPlacesLived();

const multiplier = {
    numbers: [1,2,3,4,5,6],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());