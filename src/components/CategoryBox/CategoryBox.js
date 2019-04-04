import React from 'react';
import './styles.sass';

const CategoryBox = ({ name, image }) => (
    <div className="category-box">
        <img className="category-box__image" src={image} alt={name} />
        <h3 className="category-box__name">{name}</h3>
    </div>
);

export default CategoryBox;
