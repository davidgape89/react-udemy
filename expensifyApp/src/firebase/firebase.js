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

database.ref().set({
    name: 'Davie boi',
    age: 29,
    isSingle: false,
    location: {
        city: 'Krakow',
        country: 'Poland'
    }
});

// database.ref().set('This is a string');

database.ref('age').set(27);
database.ref('location/city').set('London');


database.ref('attributes').set({
    height: 1.80,
    weight: 65
});