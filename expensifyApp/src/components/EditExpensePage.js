import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {RemoveExpenseModal} from './RemoveExpenseModal';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        };
    }

    onSubmit = (expense) => {
        this.props.startEditExpense(expense);
        this.props.history.push('/');
    }

    onRemoveStart = () => {
        this.setState(() => ({
            isModalOpen: true
        }));
    }

    removeExpense = () => {
        this.props.startRemoveExpense();
        this.props.history.push('/');
    }

    onModalClose = () => {
        this.setState(() => ({
            isModalOpen: false
        }));
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button 
                        className="button button--secondary"
                        onClick={this.onRemoveStart}>
                            Remove Expense
                    </button>
                </div>
                <RemoveExpenseModal
                    isModalOpen={this.state.isModalOpen}
                    onModalClose={this.onModalClose} 
                    removeExpense={this.removeExpense}/>
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
    startEditExpense: (update) => dispatch(startEditExpense(props.match.params.id, update)),
    startRemoveExpense: () => dispatch(startRemoveExpense(props.match.params.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);