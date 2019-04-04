import * as types from './types';

export const removeAllItemsFromCart = id => ({ type: types.REMOVE_ALL_ITEMS, productId: id });

export const addItemToCart = product => ({ type: types.ADD_ITEM, product: product });

export const removeItemFromCart = id => ({ type: types.REMOVE_ITEM, productId: id });

export const clearCart = () => ({ type: types.CLEAR_CART });
