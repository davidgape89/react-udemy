import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB1rLHf4AE9HG9277nwp_stLibWDz_2K0M",
    authDomain: "expensify-7c4d5.firebaseapp.com",
    databaseURL: "https://expensify-7c4d5.firebaseio.com",
    projectId: "expensify-7c4d5",
    storageBucket: "expensify-7c4d5.appspot.com",
    messagingSenderId: "435998829748"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

// // const onChange = (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });
    
// //     console.log(expenses);
// // };

// // const onSomething = (snapshot) => {
// //     console.log(snapshot.val());
// // };

// // const expenses = database.ref('expenses');

// // //database.ref('expenses').on('value', onChange);

// // //expenses.on('value', onSomething);

// // expenses.on('child_removed', onSomething);

// // expenses.on('child_changed', onSomething);

// // expenses.on('child_added', onSomething);

// // // database.ref('expenses').push({
// // //     description: 'Description 1',
// // //     note: '',
// // //     amount: 1234
// // // });




// // // database.ref('notes').push({
// // //     title: 'Course topics',
// // //     body: 'Several topics'
// // // });

// // // const firebaseNotes = {
// // //     notes: {

// // //     }
// // // }

// // // const callback = database.ref().on('value', (snapshot) => {
// // //     const value = snapshot.val();
// // //     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`);
// // // });

// // // database.ref().on('value', (snapshot) => {
// // //     const value = snapshot.val();
// // //     console.log(`is a ${value.job.title} at ${value.job.company}`);
// // // });

// // // database.ref().off('value', callback);

// // // database.ref().once('value')
// // //     .then((snapshot) => {
// // //         console.log(snapshot.val());
// // //     })
// // //     .catch((error) => {
// // //         console.log('Error fetching data', error);
// // //     });

// // // database.ref().set({
// // //     name: 'Davie boi',
// // //     age: 29,
// // //     stressLevel: 5,
// // //     isSingle: false,
// // //     job: {
// // //         title: 'Software engineer',
// // //         company: 'Google'
// // //     },
// // //     location: {
// // //         city: 'Krakow',
// // //         country: 'Poland'
// // //     }
// // // }).then((data) => {
// // //     console.log('Data saved');
// // //     console.log(data);
// // // }).catch((data) => {
// // //     console.log('Error');
// // //     console.log(data);
// // // });

// // // database.ref().update({
// // //     stressLevel: 9,
// // //     'job/company': 'Amazon',
// // //     'location/city': 'London'
// // // });
