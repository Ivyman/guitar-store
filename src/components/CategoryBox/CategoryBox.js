import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass';

const CategoryBox = ({ name, image }) => (
    <div className="category-box">
        <img className="category-box__image" src={image} alt={name} />
        <h3 className="category-box__name">{name}</h3>
    </div>
);

CategoryBox.defaultName = 'CategoryBox';
CategoryBox.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string
};
CategoryBox.defaultProps = {
    name: 'Category box item',
    image: null
};

export default CategoryBox;
