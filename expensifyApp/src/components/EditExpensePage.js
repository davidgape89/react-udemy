import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.editExpense(expense);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.props.removeExpense();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button 
                    onClick={this.onRemove}>
                        Remove
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => 
        expense.id === props.match.params.id
    )
});

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (update) => dispatch(editExpense(props.expense.id, update)),
    removeExpense: () => dispatch(removeExpense(props.expense.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);