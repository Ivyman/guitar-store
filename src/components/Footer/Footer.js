import React from 'react';
import { NavLink } from 'react-router-dom';
import { route } from '../../utils/config';
import './styles.sass';

const Footer = () => (
    <footer className="footer">
        <section className="container">
            <NavLink className="footer__logo" to={route.home.link}>
                <span className="logo logo--dark logo--small">
                    <span className="logo__image" />
                    <span className="logo__text" />
                </span>
            </NavLink>
            <nav className="footer__navbar">
                <ul>
                    <li className="footer__navbar-item">
                        <NavLink exact className="footer__navbar-link" to={route.home.link}>
                            Home
                        </NavLink>
                    </li>
                    <li className="footer__navbar-item">
                        <NavLink className="footer__navbar-link" to={route.catalog.link}>
                            Catalog
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    </footer>
);

export default Footer;
