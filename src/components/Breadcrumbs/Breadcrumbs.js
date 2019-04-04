import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { route } from '../../utils/config';
import './styles.sass';

const Breadcrumbs = ({ crumbs }) => (
    <ul className="breadcrumbs">
        <li className="breadcrumbs__item breadcrumbs__item--home">
            <Link className="breadcrumbs__item-link" to={route.home.link}>
                Home
            </Link>
        </li>
        {crumbs.map((item, index) =>
            crumbs.length - 1 === index ? (
                <li className="breadcrumbs__item" key={item[0]}>
                    {item[0]}
                </li>
            ) : (
                <li className="breadcrumbs__item" key={item[0]}>
                    <Link className="breadcrumbs__item-link" to={item[1]}>
                        {item[0]}
                    </Link>
                </li>
            )
        )}
    </ul>
);

Breadcrumbs.defaultName = 'Breadcrumbs';
Breadcrumbs.propTypes = {
    crumbs: PropTypes.array.isRequired
};

export default Breadcrumbs;
