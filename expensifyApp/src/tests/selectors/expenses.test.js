import moment from 'moment';
import expensesSelector from '../../selectors/expenses';

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'day').valueOf()
},{
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'day').valueOf()
}]

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = expensesSelector(expenses, filters);

    expect(result).toEqual([
        expenses[2],
        expenses[1]
    ]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = expensesSelector(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = expensesSelector(expenses, filters);

    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = expensesSelector(expenses, filters);

    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

// should sort by amount
test('should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = expensesSelector(expenses, filters);

    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});

// export default (expenses, {text, sortBy, startDate, endDate}) => {
//     return expenses.filter((expense) => {
//         const createdAtMoment = moment(expense.createdAt)
//         const startDateMatch = startDate? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
//         const endDateMatch = endDate? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
//         const textMatch = !text || expense.description.toLowerCase().includes(text.toLowerCase());
        
//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a,b) => {
//         if(sortBy === 'date')   
//             return a.createdAt < b.createdAt? 1: -1;
            
//         if(sortBy === 'amount') 
//             return a.amount < b.amount? 1: -1;
//     });
// };