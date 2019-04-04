const cartAmountSelector = store => store.cart.amount;

const cartItemsSelector = store => store.cart;

const cartItemAmountSelector = (id, store) => {
    let order = store.cart.orders.find(order => order.id === id);
    return order ? order.quantity : 0;
};

export { cartAmountSelector, cartItemAmountSelector, cartItemsSelector };
