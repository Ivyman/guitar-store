import * as types from './types';

const initialState = {
    orders: [],
    amount: 0,
    totalPrice: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_ITEM:
            let hasProduct = false;
            let aOrders = [
                ...state.orders.map(order => {
                    if (order.id === action.product.id) {
                        ++order.quantity;
                        order.totalItemPrice =
                            parseInt(order.totalItemPrice, 10) + parseInt(order.price, 10);
                        hasProduct = true;
                    }
                    return order;
                })
            ];
            if (!hasProduct)
                aOrders.push({
                    ...action.product,
                    quantity: 1,
                    totalItemPrice: parseInt(action.product.price, 10)
                });

            return {
                orders: aOrders,
                amount: parseInt(state.amount, 10) + 1,
                totalPrice: state.totalPrice
                    ? parseInt(state.totalPrice, 10) + parseInt(action.product.price, 10)
                    : parseInt(action.product.price, 10)
            };
        case types.REMOVE_ITEM:
            let itemPrice = 0;
            let rOrders = [
                ...state.orders.map(product => {
                    if (product.id === action.productId) {
                        itemPrice = product.price;
                        product.quantity === 1 ? (product.quantity = 0) : --product.quantity;
                        product.totalItemPrice =
                            product.totalItemPrice === state.price
                                ? 0
                                : parseInt(product.totalItemPrice, 10) -
                                  parseInt(product.price, 10);
                    }
                    return product;
                })
            ];

            return {
                orders: [...rOrders.filter(order => order.quantity !== 0)],
                amount: state.amount === 0 ? 0 : parseInt(state.amount, 10) - 1,
                totalPrice:
                    state.totalPrice === itemPrice
                        ? 0
                        : parseInt(state.totalPrice, 10) - parseInt(itemPrice, 10)
            };
        case types.REMOVE_ALL_ITEMS:
            let itemsAmout = 0;
            let itemsToalPrice = 0;

            return {
                orders: [
                    ...state.orders.filter(order => {
                        if (order.id === action.productId) {
                            itemsAmout = order.quantity;
                            itemsToalPrice = order.totalItemPrice;
                        }
                        return order.id !== action.productId;
                    })
                ],
                amount:
                    state.amount === itemsAmout
                        ? 0
                        : parseInt(state.amount, 10) - parseInt(itemsAmout, 10),
                totalPrice:
                    state.totalPrice === itemsToalPrice
                        ? 0
                        : parseInt(state.totalPrice, 10) - parseInt(itemsToalPrice, 10)
            };
        case types.CLEAR_CART:
            return { ...initialState };
        default:
            return state;
    }
};

export { reducer };
