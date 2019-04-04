import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from '../../components/Select';
import { deliveryServices, paymentMethods } from '../../utils/config';
import './styles.sass';

const CheckoutForm = ({ onSettingsChange, hasError }) => {
    const [checkoutForm, setCheckoutForm] = useState({
        name: '',
        email: '',
        phone: '',
        payment: '',
        delivery: '',
        country: '',
        postcode: '',
        city: '',
        address: ''
    });

    const handleInputChange = (event, field) => {
        setCheckoutForm({ ...checkoutForm, [field]: event.target.value });
    };

    useEffect(() => onSettingsChange(checkoutForm), [checkoutForm]);

    return (
        <form className="checkout-form" onSubmit={event => event.preventDefault()}>
            {hasError && (
                <p className="checkout-form__error">Fill in correctly all fields below!</p>
            )}
            <fieldset className="checkout-form__fieldset">
                <legend className="checkout-form__legend">Contact information</legend>
                <input
                    className="input"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={checkoutForm.name}
                    onChange={event => handleInputChange(event, 'name')}
                />
                <input
                    className="input"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={checkoutForm.email}
                    onChange={event => handleInputChange(event, 'email')}
                />
                <input
                    className="input"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={checkoutForm.phone}
                    onChange={event => handleInputChange(event, 'phone')}
                />
            </fieldset>

            <fieldset className="checkout-form__fieldset">
                <legend className="checkout-form__legend">Payment method</legend>
                <div className="radio-boxes">
                    {paymentMethods.map(method => (
                        <span
                            key={method.value}
                            className={`radio-boxes__item radio-boxes__item--${method.value}`}
                        >
                            <input
                                id={method.value}
                                name="payment"
                                type="radio"
                                value={method.value}
                                onChange={event => handleInputChange(event, 'payment')}
                            />
                            <label htmlFor={method.value}>{method.name}</label>
                        </span>
                    ))}
                </div>
            </fieldset>

            <fieldset className="checkout-form__fieldset">
                <legend className="checkout-form__legend">Delivery option</legend>
                <Select
                    name="delivery"
                    value={checkoutForm.delivery}
                    onChange={event => handleInputChange(event, 'delivery')}
                >
                    <option value="" disabled>
                        Select delivery
                    </option>
                    {deliveryServices.map(item => (
                        <option key={item.value} value={item.value}>
                            {item.name}
                        </option>
                    ))}
                </Select>
            </fieldset>

            <fieldset className="checkout-form__fieldset">
                <legend className="checkout-form__legend">Delivery address</legend>
                <input
                    type="text"
                    className="input"
                    name="country"
                    placeholder="Country"
                    value={checkoutForm.country}
                    onChange={event => handleInputChange(event, 'country')}
                />
                <input
                    type="number"
                    className="input"
                    name="postcode"
                    placeholder="Postcode"
                    value={checkoutForm.postcode}
                    onChange={event => handleInputChange(event, 'postcode')}
                />
                <input
                    type="text"
                    className="input"
                    name="city"
                    placeholder="City"
                    value={checkoutForm.city}
                    onChange={event => handleInputChange(event, 'city')}
                />
                <input
                    className="input"
                    name="address"
                    type="text"
                    placeholder="Address"
                    value={checkoutForm.address}
                    onChange={event => handleInputChange(event, 'address')}
                />
            </fieldset>
        </form>
    );
};

CheckoutForm.defaultName = 'CheckoutForm';
CheckoutForm.propTypes = {
    onSettingsChange: PropTypes.func.isRequired,
    hasError: PropTypes.bool
};
CheckoutForm.defaultProps = {
    hasError: false
};

export default CheckoutForm;
