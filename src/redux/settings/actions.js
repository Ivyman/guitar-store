import axios from 'axios';
import * as types from './types';
import { settingsEndpoint } from '../../utils/config';

export const fetchSettings = () => async dispatch => {
    dispatch(startFetchingSettings());
    try {
        const responce = await axios.get(settingsEndpoint);
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
