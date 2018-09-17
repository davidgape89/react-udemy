const reducer = (accum, currentValue) => accum + currentValue;

export default (expenses) => 
    expenses.map(expense => expense.amount)
    .reduce((accum, newValue) => accum + newValue, 0)