import { createStore } from 'redux';

// Action generators - functions that return action objects
const add = ({a, b}) => {
    return a + b;
}

console.log(add({ a: 1, b: 12 }))

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => {
    console.log(decrementBy);
    return ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})};

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count}) => ({
    type: 'SET',
    count: count
})

// Reducers
// 1. Reducers are pure (only uses arguments inside, no external variables!)
// functions.
// 2. NEVER change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default: 
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe((state) => {
    console.log(store.getState())
});


// Increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));


store.dispatch(incrementCount());


store.dispatch(resetCount());


store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(decrementCount());

store.dispatch(setCount({count: 101}))