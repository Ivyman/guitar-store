import React from 'react';
import CheckoutForm from '../../components/CheckoutForm';
import './styles.sass';

const CheckoutSettings = ({ onSettingsChange, hasFormError }) => (
    <CheckoutForm onSettingsChange={onSettingsChange} hasError={hasFormError} />
);

export default CheckoutSettings;
