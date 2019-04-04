import * as types from './types';

const initialState = {
    query: '',
    priceFrom: 0,
    priceTo: 0,
    brand: [],
    pickup: [],
    tremolo: [],
    category: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_FILTERS:
            let filterData = action.filterData;

            if (Array.isArray(filterData.target)) {
                let fieldName = filterData.target[0];
                let fieldValue = filterData.target[1];
                let data = { [fieldName]: [...state[fieldName]] };

                if (filterData.value && !data[fieldName].includes(fieldValue)) {
                    data[fieldName].push(fieldValue);
                } else if (!filterData.value) {
                    data[fieldName] = data[fieldName].filter(item => item !== fieldValue);
                }

                filterData = data;
            } else {
                filterData = { [filterData.target]: filterData.value };
            }

            return { ...state, ...filterData };
        case types.CLEAR_FILTERS:
            return { ...initialState };
        default:
            return state;
    }
};

export { reducer };
