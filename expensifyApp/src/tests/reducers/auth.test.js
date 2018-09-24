import authReducer from '../../reducers/auth';

test('should setup the default state correctly', () => {
    const state = authReducer(undefined, {
        type: '@@INIT'
    });

    expect(state).toEqual({});
});

test('should handle login action correctly', () => {
    const uid = 'useruid';
    const state = authReducer(undefined, {
        type: 'LOGIN',
        uid
    });

    expect(state).toEqual({
        uid
    });
});

test('should handle logout action correctly', () => {
    const prevState = {
        uid: 'something'
    };
    const state = authReducer(prevState, {
        type: 'LOGOUT'
    });

    expect(state).toEqual({});
});