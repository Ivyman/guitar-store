import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AmountControl from '../AmountControl';
import { route } from '../../utils/config';
import { currencyFormat } from '../../utils/helper';
import './styles.sass';

const ProductListItem = ({
    id,
    name,
    thumb,
    price,
    brand,
    category,
    cartItemAmount,
    onRemoveFromCart,
    onAddToCart
}) => (
    <div className="product-list-item">
        <Link className="product-list-item__content" to={route.product.link(id)}>
            <img className="product-list-item__brand" src={brand.image} alt={brand.name} />
            <img className="product-list-item__image" src={thumb} alt={name} />
            <h4 className="product-list-item__title">{name}</h4>
            <h5 className="product-list-item__category">{category.name}</h5>
        </Link>

        <div className="product-list-item__footer">
            <p className="product-list-item__price">{currencyFormat(price)}</p>
            <AmountControl
                list
                amount={cartItemAmount}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
            />
        </div>
    </div>
);

ProductListItem.defaultName = 'ProductListItem';
ProductListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    brand: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string
    }).isRequired,
    category: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string
    }).isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func.isRequired,
    cartItemAmount: PropTypes.number
};
ProductListItem.defaultProps = {
    cartItemAmount: 0
};

export default ProductListItem;
