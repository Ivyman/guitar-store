import * as types from './types';

const initialState = {
    name: 'name',
    email: 'email',
    phone: 'phone',
    payment: 'payment',
    delivery: 'delivery',
    country: 'country',
    postcode: '123123',
    city: 'city',
    address: 'address'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_SUMMARY_DATA:
            return { ...action.summaryData };
        case types.CLEAR_SUMMARY:
            return { ...initialState };
        default:
            return state;
    }
};

export { reducer };
