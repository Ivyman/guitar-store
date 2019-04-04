import React from 'react';
import ProductListItem from '../ProductListItem';
import NoData from '../../components/NoData';
import './styles.sass';

const ProductList = ({ products, cartItemAmount, onAddToCart, onRemoveFromCart }) =>
    products.length ? (
        <div className="product-list">
            {products.map(product => (
                <ProductListItem
                    {...product}
                    key={product.id}
                    cartItemAmount={cartItemAmount(product.id)}
                    onAddToCart={() =>
                        onAddToCart({
                            id: product.id,
                            name: product.name,
                            thumb: product.thumb,
                            price: product.price,
                            category: product.category.name
                        })
                    }
                    onRemoveFromCart={() => onRemoveFromCart(product.id)}
                />
            ))}
        </div>
    ) : (
        <NoData message="No product found!" />
    );
export default ProductList;
