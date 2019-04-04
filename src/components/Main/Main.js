import React from 'react';
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

export default Main;
