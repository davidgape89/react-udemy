import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';
import expensesTotalSelector from '../selectors/expenses-total';
import expensesSelector from '../selectors/expenses';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1? 'expense': 'expenses';

    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {numeral(expensesTotal / 100).format('$0,0.00')}</h1>
        </div>
    );
}

const mapStateToProps = (state) => {
    const visibleExpenses = expensesSelector(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expensesTotalSelector(visibleExpenses)
    };
}

export default connect(mapStateToProps)(ExpensesSummary);