import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly with one expense', () => {
    const props = {
        expenseCount: 1,
        expensesTotal: 9434
    };
    const wrapper = shallow(<ExpensesSummary {...props}/>);

    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with two expenses', () => {
    const props = {
        expenseCount: 2,
        expensesTotal: 9434
    };
    const wrapper = shallow(<ExpensesSummary {...props}/>);

    expect(wrapper).toMatchSnapshot();
});