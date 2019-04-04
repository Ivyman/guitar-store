import React from 'react';
import './styles.sass';

const Dropdown = ({ children, value, onChange, name, merge }) => (
    <label className={`select ${merge ? 'select--merge' : ''}`}>
        <select name={name} value={value} onChange={onChange}>
            {children}
        </select>
    </label>
);

export default Dropdown;
