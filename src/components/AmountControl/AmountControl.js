import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

const AmountControl = ({ amount, small, onAddToCart, onRemoveFromCart, list }) => (
    <div
        className={`amount-control ${small ? 'amount-control--small' : ''} ${
            list ? 'amount-control--list' : ''
        }`}
    >
        {amount ? (
            <>
                <button onClick={onRemoveFromCart} className="amount-control__minus">
                    -
                </button>
                <span className="amount-control__number">{amount}</span>
                <button onClick={onAddToCart} className="amount-control__plus">
                    +
                </button>
            </>
        ) : (
            <button onClick={onAddToCart} className="amount-control__add">
                Add to cart
            </button>
        )}
    </div>
);

AmountControl.defaultName = 'AmountControl';
AmountControl.propTypes = {
    onAddToCart: PropTypes.func.isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
    amount: PropTypes.number,
    small: PropTypes.bool,
    list: PropTypes.bool
};
AmountControl.defaultProps = {
    amount: 0,
    small: false,
    list: false
};

export default AmountControl;
