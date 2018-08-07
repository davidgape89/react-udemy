import moment from 'moment';
import filtersReducer from '../../reducers/filters';
import filters from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {
        type: '@@INIT'
    });

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { 
        type: 'SORT_BY_AMOUNT'
    });

    expect(state.sortBy).toBe('amount');
});

// I actually like this test better since we're
// making sure no other attributes in the store change
// when this action is triggered.
test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);

    expect(state).toEqual({
        ...currentState,
        sortBy: 'date'
    });
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, {
        type: 'SET_TEXT_FILTER',
        text: 'textSample'
    });

    expect(state.text).toEqual('textSample');
});

test('should set startDate filter', () => {
    const startDate = moment();
    const state = filtersReducer(undefined, {
        type: 'SET_START_DATE',
        startDate: startDate
    });

    expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
    const endDate = moment();
    const state = filtersReducer(undefined, {
        type: 'SET_END_DATE',
        endDate: endDate
    });

    expect(state.endDate).toEqual(endDate);
});