import React from 'react';
import { route } from '../../utils/config';
import { connect } from 'react-redux';
import { cartItemsSelector } from '../../redux/cart/selectors';
import {
    addItemToCart,
    removeItemFromCart,
    removeAllItemsFromCart
} from '../../redux/cart/actions';
import SummaryList from '../../components/SummaryList';
import Breadcrumbs from '../../components/Breadcrumbs';
import Button from '../../components/Button';

class Cart extends React.Component {
    render() {
        const { cartItems, addItemToCart, removeItemFromCart, removeAllItemsFromCart } = this.props;

        return (
            <>
                <Breadcrumbs crumbs={[['Shopping cart']]} />
                <h1 className="main-subtitle">Shopping cart</h1>
                <SummaryList
                    rwd
                    cartItems={cartItems}
                    onAddToCart={addItemToCart}
                    onRemoveFromCart={removeItemFromCart}
                    onRemoveAllItemsFromCart={removeAllItemsFromCart}
                />

                <div className="space-between">
                    <Button back linkTo={route.catalog.link}>
                        Continue shopping
                    </Button>
                    {cartItems.amount !== 0 && (
                        <Button main linkTo={route.checkout.link}>
                            Checkout
                        </Button>
                    )}
                </div>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: product => dispatch(addItemToCart(product)),
    removeItemFromCart: id => dispatch(removeItemFromCart(id)),
    removeAllItemsFromCart: id => dispatch(removeAllItemsFromCart(id))
});

const mapStateToProps = store => ({
    cartItems: cartItemsSelector(store)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
