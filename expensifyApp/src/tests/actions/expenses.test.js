import { 
    addExpense, 
    editExpense, 
    removeExpense 
} from '../../actions/expenses';

test('should set up remove expense action object', () => {
    const action = removeExpense('123456');

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123456'
    });
});

test('should set up edit expense action object', () => {
    const update = {note: 'New note value'};
    const action = editExpense('123456', update);

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123456',
        updates: update
    });
});

test('should set up addExpense action object with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            amount: 0,
            createdAt: 0,
            description: '',
            note: ''
        }
    });
})

test('should set up addExpense action object', () => {
    const newExpense = {
        description: 'something',
        amount: 108300,
        createdAt: 1000,
        note: 'New note value'
    };
    const action = addExpense(newExpense);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            ...newExpense
        }
    });
})