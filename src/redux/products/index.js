import * as types from './types';

const initialState = {
    products: [],
    fetching: false,
    fetchError: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            return {
                ...state,
                fetching: true
            };
        case types.FETCH_PRODUCTS_FAIL:
            return {
                ...state,
                fetching: false,
                fetchError: true
            };
        case types.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.products,
                fetching: false
            };
        default:
            return state;
    }
};

export { reducer };
