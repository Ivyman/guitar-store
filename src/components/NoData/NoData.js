import React from 'react';
import './styles.sass';

const NoData = ({ message = 'No data for showing :(' }) => (
    <div className="no-data">
        <span className="no-data__image" />
        <span className="no-data__message">{message}</span>
    </div>
);

export default NoData;
