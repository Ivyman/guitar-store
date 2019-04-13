import * as types from './types';

const initialState = {
    name: '',
    email: '',
    phone: '',
    payment: '',
    delivery: '',
    country: '',
    postcode: '',
    city: '',
    address: ''
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
