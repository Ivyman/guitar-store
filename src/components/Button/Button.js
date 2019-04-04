import React from 'react';
import PropTypes from 'prop-types';
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

Button.defaultName = 'Button';
Button.propTypes = {
    back: PropTypes.bool,
    main: PropTypes.bool,
    linkTo: PropTypes.string,
    children: PropTypes.string,
    onClick: PropTypes.func
};
Button.defaultProps = {
    back: false,
    main: false,
    linkTo: null,
    children: '',
    onClick: null
};

export default Button;
