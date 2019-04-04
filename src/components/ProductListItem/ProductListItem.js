import React from 'react';
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

export default ProductListItem;
