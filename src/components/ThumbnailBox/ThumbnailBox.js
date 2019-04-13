import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { route } from '../../utils/config';
import './styles.sass';

const ThumbnailBox = ({ thumb, name, category, productId, small, amount }) => (
    <div className={`thumbnail-box ${small ? 'thumbnail-box--small' : ''}`}>
        <div className="thumbnail-box__image">
            {amount !== 0 && <span className="thumbnail-box__item-amount">{amount}</span>}
            <img src={thumb} alt={name} />
        </div>
        <div className="thumbnail-box__content">
            <Link
                className="thumbnail-box__title"
                to={route.product.link(productId)}
                target="_blank"
            >
                {name}
            </Link>
            <p className="thumbnail-box__category">{category}</p>
        </div>
    </div>
);

ThumbnailBox.defaultName = 'ThumbnailBox';
ThumbnailBox.propTypes = {
    thumb: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    productId: PropTypes.number,
    small: PropTypes.bool,
    amount: PropTypes.number
};
ThumbnailBox.defaultProps = {
    thumb: '',
    name: 'Thumbnail',
    category: 'No category',
    productId: 0,
    small: false,
    amount: 0
};

export default ThumbnailBox;
