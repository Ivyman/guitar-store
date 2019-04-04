import React from 'react';
import PropTypes from 'prop-types';
import ThumbnailBox from '../ThumbnailBox';
import AmountControl from '../AmountControl';
import NoData from '../NoData';
import { currencyFormat } from '../../utils/helper';
import './styles.sass';

const SummaryList = ({
    rwd,
    cartItems,
    small,
    onAddToCart,
    onRemoveFromCart,
    onRemoveAllItemsFromCart
}) => (
    <div className={`summary-list ${rwd ? 'summary-list--rwd' : ''}`}>
        {small &&
            (cartItems.amount ? (
                <table className="summary-list__table">
                    <tbody>
                        {cartItems.orders.map(order => (
                            <tr key={order.id}>
                                <td>
                                    <ThumbnailBox
                                        small
                                        amount={order.quantity}
                                        productId={order.id}
                                        name={order.name}
                                        thumb={order.thumb}
                                        category={order.category}
                                    />
                                </td>
                                <td>{currencyFormat(order.totalItemPrice)}</td>
                            </tr>
                        ))}
                        <tr className="summary-list__summary summary-list__summary--small">
                            <td colSpan="2">
                                Summary:{' '}
                                <span className="summary-list__summary-price">
                                    {currencyFormat(cartItems.totalPrice)}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <NoData message="Add some items to your cart!" />
            ))}

        {!small &&
            (cartItems.amount ? (
                <table className="summary-list__table">
                    <tbody>
                        {cartItems.orders.map(order => (
                            <tr key={order.id}>
                                <td>
                                    <ThumbnailBox
                                        productId={order.id}
                                        name={order.name}
                                        thumb={order.thumb}
                                        category={order.category}
                                    />
                                </td>
                                <td>
                                    <AmountControl
                                        small
                                        amount={order.quantity}
                                        onAddToCart={() =>
                                            onAddToCart({
                                                id: order.id,
                                                name: order.name,
                                                thumb: order.thumb,
                                                price: order.price,
                                                category: order.category.name
                                            })
                                        }
                                        onRemoveFromCart={() => onRemoveFromCart(order.id)}
                                    />
                                </td>
                                <td>{currencyFormat(order.totalItemPrice)}</td>
                                <td className="text-center">
                                    <button
                                        onClick={() => onRemoveAllItemsFromCart(order.id)}
                                        className="close-button close-button--small"
                                    />
                                </td>
                            </tr>
                        ))}
                        <tr className="summary-list__summary">
                            <td colSpan="4">
                                Summary:{' '}
                                <span className="summary-list__summary-price">
                                    {currencyFormat(cartItems.totalPrice)}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <NoData message="Your cart is empty" />
            ))}
    </div>
);

SummaryList.defaultName = 'SummaryList';
SummaryList.propTypes = {
    onAddToCart: PropTypes.func,
    onRemoveFromCart: PropTypes.func,
    onRemoveAllItemsFromCart: PropTypes.func,
    cartItems: PropTypes.shape({
        amount: PropTypes.number,
        orders: PropTypes.array,
        totalPrice: PropTypes.number
    }),
    small: PropTypes.bool,
    rwd: PropTypes.bool
};
SummaryList.defaultProps = {
    onAddToCart: null,
    onRemoveFromCart: null,
    onRemoveAllItemsFromCart: null,
    cartItems: {
        amount: 0,
        orders: [],
        totalPrice: 0
    },
    rwd: false,
    small: false
};

export default SummaryList;
