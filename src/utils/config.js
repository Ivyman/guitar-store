export const apiEndpoint = 'http://localhost:4433';
export const productsEndpoint = `${apiEndpoint}/products`;
export const settingsEndpoint = `${apiEndpoint}/settings`;

export const deliveryServices = [
    {
        name: 'DPD',
        value: 'dpd'
    },
    {
        name: 'UPC',
        value: 'upc'
    },
    {
        name: 'DHL',
        value: 'dhl'
    },
    {
        name: 'Poczta polska',
        value: 'pp'
    }
];

export const paymentMethods = [
    { name: 'PayPal', value: 'pp' },
    { name: 'MasterCard', value: 'mc' },
    { name: 'Visa', value: 'vs' },
    { name: 'American Express', value: 'ae' }
];

export const currency = {
    name: 'USD',
    sign: '$'
};

export const route = {
    home: { path: '/', link: '/' },
    catalog: { path: '/catalog', link: '/catalog' },
    product: { path: '/catalog/:id', link: id => `/catalog/${id}` },
    cart: { path: '/cart', link: '/cart' },
    checkout: { path: '/checkout', link: '/checkout' },
    summary: { path: '/summary', link: '/summary' }
};

export const brandName = 'GuitarLand';
