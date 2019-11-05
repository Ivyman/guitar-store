import axios from 'axios';
import * as types from './types';
import { settingsEndpoint, isProduction } from '../../utils/config';
import mockServerData from '../../db-mock.json';

export const fetchSettings = () => async dispatch => {
    dispatch(startFetchingSettings());
    try {
        const responce = isProduction
            ? { data: mockServerData.settings }
            : await axios.get(settingsEndpoint);
        dispatch(fetchingSettingsSuccess(responce.data));
    } catch (err) {
        dispatch(fetchingSettingsFail(err));
    }
};

export const startFetchingSettings = () => ({ type: types.FETCH_SETTINGS });

export const fetchingSettingsFail = () => ({ type: types.FETCH_SETTINGS_FAIL });

export const fetchingSettingsSuccess = settings => ({
    type: types.FETCH_SETTINGS_SUCCESS,
    settings: settings
});
