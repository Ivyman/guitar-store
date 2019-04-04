import React from 'react';
import { Link } from 'react-router-dom';
import './styles.sass';

const Button = ({ back, main, linkTo, children, onClick }) => {
    return linkTo ? (
        <Link
            className={`button ${back ? 'button--back' : ''} ${main ? 'button--main' : ''}`}
            to={linkTo}
        >
            {children}
        </Link>
    ) : (
        <button
            className={`button  ${main ? 'button--main' : ''}`}
            onClick={event => onClick(event)}
        >
            {children}
        </button>
    );
};

export default Button;
