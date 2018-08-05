import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
    console.log(store.getState());
});
// addExpense -> Water bill
store.dispatch(addExpense({description: 'Water bill', amount: 2000, createdAt: 100}));
// addExpense -> Gas bill
store.dispatch(addExpense({description: 'Gas bill', amount: 200, createdAt: 500}));
store.dispatch(addExpense({description: 'Gas bill', amount: 100200, createdAt: 10000}));
// setTextFilter -> bill
// store.dispatch(setTextFilter('bill'));


// getVisibleExpenses -> print
const state = store.getState();

console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
