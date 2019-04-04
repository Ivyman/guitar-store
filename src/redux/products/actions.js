import axios from 'axios';
import * as types from './types';
import { productsEndpoint } from '../../utils/config';

export const fetchProducts = () => async dispatch => {
    dispatch(startFetchingProducts());
    try {
        const responce = await axios.get(productsEndpoint);
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
