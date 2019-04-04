import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

const Select = ({ children, value, onChange, name, merge }) => (
    <label className={`select ${merge ? 'select--merge' : ''}`}>
        <select name={name} value={value} onChange={onChange}>
            {children}
        </select>
    </label>
);

Select.defaultName = 'Select';
Select.propTypes = {
    children: PropTypes.array.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    merge: PropTypes.bool
};
Select.defaultProps = {
    name: 'Select',
    merge: false
};

export default Select;
