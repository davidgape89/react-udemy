import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { 
    addExpense, 
    startAddExpense,
    editExpense,
    startEditExpense, 
    removeExpense,
    startRemoveExpense,
    setExpenses,
    startRetrieveExpenses
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'testuid';
const auth = {
    uid
};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    let expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt}
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('should set up remove expense action object', () => {
    const action = removeExpense('123456');

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123456'
    });
});

test('should remove expense from the database and store', (done) => {
    const store = createMockStore({auth, expenses});
    const removeId = 2;

    store.dispatch(startRemoveExpense(removeId)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: removeId
        });

        return database.ref(`users/${uid}/expenses`).once('value'); 
    }).then((snapshot) => {
        expect(snapshot.val().length).toBe(2);
        done();
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

test('should edit expenses from firebase', (done) => {
    const store = createMockStore({auth,expenses});
    const update = {note: 'New note value'};
    const expenseId = 2;

    store.dispatch(startEditExpense(expenseId, update)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: expenseId,
            updates: update
        });

        return database.ref(`users/${uid}/expenses/${expenseId}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val().note).toEqual(update.note);
        done();
    })
});

test('should set up addExpense action object', () => {
    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({auth});
    const expenseData = {
        description: 'Mouse',
        amount: '3000',
        note: 'This one is better',
        createdAt: 1232
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value'); 
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({auth});
    const expenseData = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value'); 
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);

    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should retrieve expenses from database and add them to the store', (done) => {
    const store = createMockStore({auth});
    let expensesData = {};

    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt}
    });

    store.dispatch(startRetrieveExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses: expenses
        });

        done();
    });
});

