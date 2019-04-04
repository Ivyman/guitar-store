const productsSelector = store => store.products.products;
const productsFetchErrorSelector = store => store.products.fetchError;
const productByIdSelector = (id, store) =>
    store.products.products.find(item => item.id === parseInt(id, 10));

export { productsSelector, productByIdSelector, productsFetchErrorSelector };
