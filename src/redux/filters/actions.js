import * as types from './types';

export const setFilters = filterData => ({
    type: types.SET_FILTERS,
    filterData: filterData
});

export const clearFilters = () => ({ type: types.CLEAR_FILTERS });
