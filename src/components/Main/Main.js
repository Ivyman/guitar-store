import React from 'react';
import PropTypes from 'prop-types';
import Router from '../../Router';
import NoData from '../../components/NoData';
import './styles.sass';

const Main = ({ hasFetchError }) => (
    <main>
        <section className="container">
            {hasFetchError ? <NoData message="Server error!" /> : <Router />}
        </section>
    </main>
);

Main.defaultName = 'Main';
Main.propTypes = {
    hasFetchError: PropTypes.bool
};
Main.defaultProps = {
    hasFetchError: false
};

export default Main;
