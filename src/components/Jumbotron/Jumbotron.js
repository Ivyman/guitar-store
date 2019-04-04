import React from 'react';
import Button from '../../components/Button';
import { route } from '../../utils/config';
import './styles.sass';

const Jumbotron = ({ brandName }) => (
    <section className="jumbotron">
        <div className="container">
            <h1 className="main-title">Welcome to {brandName}!</h1>
            <p className="main-description text-center max-width">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printe
            </p>
            <Button linkTo={route.catalog.link}>Go to catalog</Button>
        </div>
    </section>
);

export default Jumbotron;
