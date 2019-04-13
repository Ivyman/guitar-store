import React from 'react';
import PropTypes from 'prop-types';
import CheckoutForm from '../../components/CheckoutForm';
import './styles.sass';

const CheckoutSettings = ({ onSettingsChange, hasFormError, fieldsWithError }) => (
    <CheckoutForm
        onSettingsChange={onSettingsChange}
        hasError={hasFormError}
        fieldsWithError={fieldsWithError}
    />
);

CheckoutSettings.defaultName = 'CheckoutSettings';
CheckoutSettings.propTypes = {
    onSettingsChange: PropTypes.func.isRequired,
    hasFormError: PropTypes.bool,
    fieldsWithError: PropTypes.array
};
CheckoutSettings.defaultProps = {
    hasFormError: false,
    fieldsWithError: []
};

export default CheckoutSettings;
