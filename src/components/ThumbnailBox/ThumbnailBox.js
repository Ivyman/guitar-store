import React from 'react';
import { Link } from 'react-router-dom';
import { route } from '../../utils/config';
import './styles.sass';

const ThumbnailBox = ({ thumb, name, category, productId, small, amount }) => (
    <div className={`thumbnail-box ${small ? 'thumbnail-box--small' : ''}`}>
        <div className="thumbnail-box__image">
            {amount && <span className="thumbnail-box__item-amount">{amount}</span>}
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

export default ThumbnailBox;
