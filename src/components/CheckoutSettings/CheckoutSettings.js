import React from 'react';
import PropTypes from 'prop-types';
import CheckoutForm from '../../components/CheckoutForm';
import './styles.sass';

const CheckoutSettings = ({ onSettingsChange, hasFormError }) => (
    <CheckoutForm onSettingsChange={onSettingsChange} hasError={hasFormError} />
);

CheckoutSettings.defaultName = 'CheckoutSettings';
CheckoutSettings.propTypes = {
    onSettingsChange: PropTypes.func.isRequired,
    hasFormError: PropTypes.bool
};
CheckoutSettings.defaultProps = {
    hasFormError: false
};

export default CheckoutSettings;
