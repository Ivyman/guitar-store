import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Jumbotron from '../../components/Jumbotron';
import { route } from '../../utils/config';
import { isHome } from '../../utils/helper';
import { brandName } from '../../utils/config';
import './styles.sass';

const Header = ({ cartAmount, location }) => (
    <header className={`header ${isHome(location) ? 'header--curve' : ''}`}>
        <section className="container">
            <NavLink className="header__logo" to={route.home.link}>
                <span className="logo">
                    <span className="logo__image" />
                    <span className="logo__text" />
                </span>
            </NavLink>
            <nav className="header__navbar">
                <ul>
                    <li className="header__navbar-item">
                        <NavLink
                            exact
                            className="header__navbar-link"
                            activeClassName="header__navbar-link--active"
                            to={route.home.link}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="header__navbar-item">
                        <NavLink
                            className="header__navbar-link"
                            activeClassName="header__navbar-link--active"
                            to={route.catalog.link}
                        >
                            Catalog
                        </NavLink>
                    </li>
                    <li className="header__navbar-item header__navbar-item--cart">
                        <NavLink to={route.cart.link}>
                            {cartAmount !== 0 && (
                                <span className="header__cart-amount">{cartAmount}</span>
                            )}
                            <span className="header__cart-icon" />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </section>

        {isHome(location) && <Jumbotron brandName={brandName} />}
    </header>
);

Header.defaultName = 'Header';
Header.propTypes = {
    location: PropTypes.object.isRequired,
    cartAmount: PropTypes.number
};
Header.defaultProps = {
    cartAmount: 0
};

export default Header;
