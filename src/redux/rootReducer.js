import { combineReducers } from 'redux';
import { reducer as settingsReducer } from './settings';
import { reducer as productsReducer } from './products';
import { reducer as summaryReducer } from './summary';
import { reducer as cartReducer } from './cart';
import { reducer as filtersReducer } from './filters';

const rootReducer = combineReducers({
    products: productsReducer,
    settings: settingsReducer,
    summary: summaryReducer,
    cart: cartReducer,
    filters: filtersReducer
});

export default rootReducer;
