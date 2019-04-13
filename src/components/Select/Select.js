import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

const Select = ({ children, value, onChange, name, merge, hasError }) => (
    <label className={`select ${merge ? 'select--merge' : ''} ${hasError ? 'select--error' : ''}`}>
        <select name={name} value={value} onChange={onChange}>
            {children}
        </select>
    </label>
);

Select.defaultName = 'Select';
Select.propTypes = {
    children: PropTypes.array.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    merge: PropTypes.bool,
    hasError: PropTypes.bool
};
Select.defaultProps = {
    name: 'Select',
    merge: false,
    hasError: false
};

export default Select;
