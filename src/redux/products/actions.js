import axios from 'axios';
import * as types from './types';
import { productsEndpoint, isProduction } from '../../utils/config';
import mockServerData from '../../db-mock.json';

export const fetchProducts = () => async dispatch => {
    dispatch(startFetchingProducts());
    try {
        const responce = isProduction
            ? { data: mockServerData.products }
            : await axios.get(productsEndpoint);
        dispatch(fetchingProductsSuccess(responce.data));
    } catch (err) {
        dispatch(fetchingProductsFail(err));
    }
};
export const startFetchingProducts = () => ({ type: types.FETCH_PRODUCTS });

export const fetchingProductsFail = () => ({ type: types.FETCH_PRODUCTS_FAIL });

export const fetchingProductsSuccess = products => ({
    type: types.FETCH_PRODUCTS_SUCCESS,
    products: products
});
