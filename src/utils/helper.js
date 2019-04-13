import { currency } from './config';

export const currencyFormat = price => {
    let cost = price.toString().split('.');
    let formattedPrice = [];

    cost[0]
        .split('')
        .reverse()
        .forEach((item, index) => {
            formattedPrice.unshift(item);
            let i = index + 1;
            if (!(i % 3) && i !== cost[0].length) formattedPrice.unshift(',');
        });

    formattedPrice = formattedPrice.join('');
    formattedPrice = cost[1] ? `${formattedPrice}.${cost[1]}` : `${formattedPrice}.00`;

    return currency.sign + formattedPrice;
};

export const wordPluraliser = (word, amount) => `${word}${amount > 1 ? 's' : ''}`;

export const formValidate = form =>
    Object.values(form).find(field => field.length === 0) === undefined;

export const arrayRange = (length, step) =>
    Array.from({ length: length }, (x, index) => index * step);

export const getLastItem = array => array[array.length - 1];

export const isHome = ({ pathname }) => pathname === '/';

export const isSummary = ({ pathname }) => pathname === '/summary';

export const scrollTop = (smooth = false) => {
    let scrollSettings = {
        top: 0,
        left: 0
    };
    if (smooth) scrollSettings.behavior = 'smooth';

    window.scroll(scrollSettings);
};
