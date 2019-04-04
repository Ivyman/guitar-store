import React from 'react';
import PropTypes from 'prop-types';
import NoData from '../NoData';
import CategoryBox from '../CategoryBox';
import './styles.sass';

const Categories = ({ categories, onChoseCategory }) => (
    <div className={`categories ${!categories.length ? 'categories--no-data' : ''}`}>
        {categories.length ? (
            categories.map(category => (
                <div
                    className="categories__item"
                    key={category.id}
                    onClick={() => onChoseCategory(category.id)}
                >
                    <CategoryBox {...category} />
                </div>
            ))
        ) : (
            <NoData />
        )}
    </div>
);

Categories.defaultName = 'Categories';
Categories.propTypes = {
    onChoseCategory: PropTypes.func.isRequired,
    categories: PropTypes.array
};
Categories.defaultProps = {
    categories: []
};

export default Categories;
