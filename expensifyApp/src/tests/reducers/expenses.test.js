import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup the default state correctly', () => {
    const state = expensesReducer(undefined, {
        type: '@@INIT'
    });

    expect(state).toEqual([]);
});

test('should add an expense correctly', () => {
    const currentState = [expenses[0],expenses[1]];
    const state = expensesReducer(currentState, {
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });

    expect(state).toEqual(expenses);
});

test('should remove an expense by id', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    });

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    });

    expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
    const id = '1';
    const updates = {
        amount: 4000, 
        description: 'description',
        createdAt: 0,
        note: 'note'
    };
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    });

    expect(state).toEqual([
        {
            id: id,
            ...updates
        },
        expenses[1],
        expenses[2]
    ]);
});

test('should not edit an expense that is not found', () => {
    const id = '-1';
    const updates = {
        amount: 4000, 
        description: 'description',
        createdAt: 0,
        note: 'note'
    };
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    });

    expect(state).toEqual(expenses);
});
