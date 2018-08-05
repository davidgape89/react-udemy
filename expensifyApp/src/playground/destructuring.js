//
// Object destructuring
//

// const person = {
//     age: 26,
//     location: {
//         city: 'Philadephia',
//         temp: 92
//     }
// };

// // default values
// const {name: firstname = 'David', age} = person;


// console.log(`${firstname} is ${age}`);

// // renaming
// const {city, temp: temperature} = person.location;

// if (city && temperature) 
//     console.log(`It's ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania'];

const [street, city, state = 'New York' ] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.80'];

const [drink, , price] = item;

console.log(`A medium ${drink} costs ${price}`);
