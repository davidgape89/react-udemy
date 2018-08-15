import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change correctly', () => {
    const value = 'text';

    wrapper.find('input').simulate('change', {
        target: { value }
    });

    expect(setTextFilter).toHaveBeenCalledWith(value);
});

test('should sort by amount correctly', () => {

    wrapper.find('select').simulate('change', {
        target: { value: 'amount' }
    });

    expect(sortByAmount).toHaveBeenCalled();
});

test('should sort by date correctly', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'date' }
    });

    expect(sortByDate).toHaveBeenCalled();
});

test('should handle date changes correctly', () => {
    const startDate = moment(1);
    const endDate = moment(1).add(2, 'days');

    wrapper.find('DateRangePicker').simulate('datesChange', {
        startDate,
        endDate
    });

    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle date focus changes correctly', () => {
    const startDate = moment(1);
    const endDate = moment(1).add(2, 'days');

    wrapper.find('DateRangePicker').simulate('focusChange', 'startDate');

    expect(wrapper.state('calendarFocused')).toEqual('startDate');
});

