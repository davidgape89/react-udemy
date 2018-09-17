import expensesTotalSelector from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if the array is empty', () => {
    expect(expensesTotalSelector([])).toEqual(0);
});

test('should correctly add up a single expense', () => {
    const expense = [expenses[0]];

    expect(expensesTotalSelector(expense)).toEqual(expenses[0].amount);
});

test('should correctly add up multiple expenses', () => {
    const result = 
        expenses[0].amount +
        expenses[1].amount +
        expenses[2].amount;

    expect(expensesTotalSelector(expenses)).toEqual(result);
})