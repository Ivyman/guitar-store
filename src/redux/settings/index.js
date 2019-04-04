import * as types from './types';

const initialState = {
    categories: [],
    brands: [],
    pickups: [],
    tremolos: [],
    fetching: false,
    fetchError: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_SETTINGS:
            return {
                ...state,
                fetching: true
            };
        case types.FETCH_SETTINGS_FAIL:
            return {
                ...state,
                fetchError: true,
                fetching: false
            };
        case types.FETCH_SETTINGS_SUCCESS:
            return {
                ...state,
                ...action.settings,
                fetching: false
            };
        default:
            return state;
    }
};

export { reducer };
