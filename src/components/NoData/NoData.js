import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

const NoData = ({ message }) => (
    <div className="no-data">
        <span className="no-data__image" />
        <span className="no-data__message">{message}</span>
    </div>
);

NoData.defaultName = 'NoData';
NoData.propTypes = {
    message: PropTypes.string
};
NoData.defaultProps = {
    message: 'No data for showing :('
};

export default NoData;
