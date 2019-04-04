import * as types from './types';

export const setSummaryData = summaryData => ({
    type: types.SET_SUMMARY_DATA,
    summaryData: summaryData
});

export const clearSummary = () => ({ type: types.CLEAR_SUMMARY });
