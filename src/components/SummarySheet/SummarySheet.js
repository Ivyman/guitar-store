import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { route, paymentMethods, deliveryServices } from '../../utils/config';
import { currencyFormat } from '../../utils/helper';
import './styles.sass';

const SummarySheet = ({ data: { cartItems, summaryData } }) => (
    <div className="summary-sheet">
        <div className="summary-sheet__hero" />
        <h2 className="summary-sheet__title">Summary Sheet</h2>

        <table className="summary-sheet__table">
            <thead>
                <tr>
                    <td>Contact information</td>
                    <td>Payment method</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{summaryData.name}</td>
                    <td>{paymentMethods.find(item => item.value === summaryData.payment).name}</td>
                </tr>
                <tr>
                    <td colSpan="2">{summaryData.email}</td>
                </tr>
            </tbody>
        </table>

        <table className="summary-sheet__table">
            <thead>
                <tr>
                    <td>Delivery address</td>
                    <td>Delivery option</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {summaryData.country}, {summaryData.postcode}
                    </td>
                    <td>
                        {deliveryServices.find(item => item.value === summaryData.delivery).name}
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        {summaryData.address}, {summaryData.city}
                    </td>
                </tr>
                <tr>
                    <td>{summaryData.phone}</td>
                </tr>
            </tbody>
        </table>

        <table className="summary-sheet__table">
            <thead>
                <tr>
                    <td colSpan="3">Products</td>
                </tr>
            </thead>
            <tbody>
                {cartItems.orders.map(order => (
                    <tr key={order.id}>
                        <td>{order.name}</td>
                        <td>{order.quantity}</td>
                        <td>{currencyFormat(order.totalItemPrice)}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3" className="summary-sheet__table-summary">
                        Summary: <span>{currencyFormat(cartItems.totalPrice)}</span>
                    </td>
                </tr>
            </tfoot>
        </table>

        <div className="text-center">
            <Button main linkTo={route.catalog.link}>
                Back to catalog
            </Button>
        </div>
    </div>
);

SummarySheet.defaultName = 'SummaryList';
SummarySheet.propTypes = {
    data: PropTypes.shape({
        cartItems: PropTypes.shape({
            amount: PropTypes.number,
            orders: PropTypes.array,
            totalPrice: PropTypes.number
        }).isRequired,
        summaryData: PropTypes.object.isRequired
    })
};

export default SummarySheet;
