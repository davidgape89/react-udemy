import React from 'react';
import numeral from 'numeral';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import expensesTotalSelector from '../selectors/expenses-total';
import expensesSelector from '../selectors/expenses';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1? 'expense': 'expenses';

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{numeral(expensesTotal / 100).format('$0,0.00')}</span>
                </h1>
                <div className="page-header__actions">
                    <Link to="/create" className="button">Add Expense</Link>
                </div>
            </div>
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