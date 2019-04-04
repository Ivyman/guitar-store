import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { route } from '../../utils/config';
import ProductDescription from '../../components/ProductDescription';
import Breadcrumbs from '../../components/Breadcrumbs';
import { productByIdSelector } from '../../redux/products/selectors';
import { cartItemAmountSelector } from '../../redux/cart/selectors';
import { addItemToCart, removeItemFromCart } from '../../redux/cart/actions';

class Product extends React.Component {
    render() {
        const {
            match,
            productById,
            addItemToCart,
            removeItemFromCart,
            cartItemAmount
        } = this.props;

        const productData = { ...productById(match.params.id) };

        return (
            <>
                <Breadcrumbs crumbs={[['Catalog', route.catalog.link], [productData.name]]} />
                <h1 className="main-subtitle">{productData.name}</h1>
                <ProductDescription
                    cartItemAmount={cartItemAmount}
                    onAddToCart={addItemToCart}
                    onRemoveFromCart={removeItemFromCart}
                    {...productData}
                />
            </>
        );
    }
}

Product.defaultName = 'Product';
Product.propTypes = {
    addItemToCart: PropTypes.func.isRequired,
    removeItemFromCart: PropTypes.func.isRequired,
    productById: PropTypes.func.isRequired,
    cartItemAmount: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    addItemToCart: product => dispatch(addItemToCart(product)),
    removeItemFromCart: id => dispatch(removeItemFromCart(id))
});

const mapStateToProps = store => ({
    productById: id => productByIdSelector(id, store),
    cartItemAmount: id => cartItemAmountSelector(id, store)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Product);
