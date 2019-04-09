import React from 'react';
import PropTypes from 'prop-types';
import AmountControl from '../AmountControl';
import Button from '../Button';
import { currencyFormat } from '../../utils/helper';
import { route } from '../../utils/config';
import './styles.sass';

const ProductDescription = ({
    id,
    name,
    image,
    thumb,
    price,
    brand,
    category: { name: categoryName },
    description,
    pickup,
    tremolo,
    onAddToCart,
    onRemoveFromCart,
    cartItemAmount
}) => (
    <div className="product-description">
        <div className="product-description__body">
            <div className="product-description__image">
                <img src={image} alt={name} />
            </div>

            <div className="product-description__content">
                <table className="product-description__features">
                    <tbody>
                        <tr>
                            <td className="product-description__features-title">Pickup:</td>
                            <td className="product-description__features-content">
                                <p>{pickup.name}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="product-description__features-title">Tremolo:</td>
                            <td className="product-description__features-content">
                                <p>{tremolo.name}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="product-description__features-title">Brand:</td>
                            <td className="product-description__features-content">
                                <img
                                    className="product-description__brand"
                                    src={brand.image}
                                    alt={brand.name}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="product-description__features-title">Category:</td>
                            <td className="product-description__features-content">
                                <p>{categoryName}</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="product-description__features-title">Description:</td>
                            <td className="product-description__features-content">
                                <p>{description}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="product-description__price-box">
                    <p className="product-description__price">{currencyFormat(price)}</p>
                    <AmountControl
                        amount={cartItemAmount(id)}
                        onAddToCart={() =>
                            onAddToCart({ id, name, thumb, price, category: categoryName })
                        }
                        onRemoveFromCart={() => onRemoveFromCart(id)}
                    />
                </div>
            </div>
        </div>

        <div className="space-between margin-top">
            <Button back linkTo={route.catalog.link}>
                Continue shopping
            </Button>
            <Button main linkTo={route.cart.link}>
                Go to cart
            </Button>
        </div>
    </div>
);

ProductDescription.defaultName = 'ProductDescription';
ProductDescription.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.shape({
        name: PropTypes.string
    }).isRequired,
    thumb: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    brand: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string
    }).isRequired,
    description: PropTypes.string.isRequired,
    pickup: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string
    }).isRequired,
    tremolo: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
    cartItemAmount: PropTypes.func.isRequired
};

export default ProductDescription;
