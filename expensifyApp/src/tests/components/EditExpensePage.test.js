import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';


let startEditExpense, startRemoveExpense, history, wrapper;

beforeAll(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            expense={expenses[0]}
            startEditExpense={startEditExpense} 
            startRemoveExpense={startRemoveExpense} 
            history={history} 
        />
    );
})

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startEditExpense', () => {
    const amount = 200;
    wrapper.find('ExpenseForm').prop('onSubmit')({
        ...expenses[0],
        amount: amount,
        id: undefined
    });
    
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenCalledWith({
        ...expenses[0],
        amount: amount,
        id: undefined
    });
});

test('should handle onRemove', () => {
    wrapper.find('button').prop('onClick')();
    
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenCalledWith();
});