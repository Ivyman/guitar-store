import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cartItemsSelector } from '../../redux/cart/selectors';
import { route } from '../../utils/config';
import { scrollTop } from '../../utils/helper';
import { fromValidate } from '../../utils/helper';
import LoadBar from '../../components/LoadBar';
import Breadcrumbs from '../../components/Breadcrumbs';
import CheckoutSettings from '../../components/CheckoutSettings';
import SummaryList from '../../components/SummaryList';
import Button from '../../components/Button';
import { setSummaryData } from '../../redux/summary/actions';

class Checkout extends React.Component {
    state = { settingsForm: {}, hasFormError: false, showThrobber: false };

    handleSettingsChange = fields => {
        this.setState({ settingsForm: { ...fields }, hasFormError: false });
    };

    handlePayClick = () => {
        if (fromValidate(this.state.settingsForm)) {
            this.setState({ showThrobber: true });

            this.props.setSummaryData(this.state.settingsForm);
            setTimeout(() => this.props.history.push(route.summary.link), 2000);
        } else {
            this.setState({ hasFormError: true }, () => scrollTop(true));
        }
    };

    render() {
        const { cartItems } = this.props;
        const { hasFormError, showThrobber } = this.state;

        return (
            <>
                <Breadcrumbs crumbs={[['Checkout']]} />
                <h1 className="main-subtitle">Checkout</h1>

                {showThrobber ? (
                    <LoadBar appearance message="Payment loading..." />
                ) : (
                    <>
                        <div className="columns">
                            <CheckoutSettings
                                hasFormError={hasFormError}
                                onSettingsChange={this.handleSettingsChange}
                            />
                            <SummaryList small cartItems={cartItems} />
                        </div>
                        <div className="space-between margin-top">
                            <Button back linkTo={route.catalog.link}>
                                Continue shopping
                            </Button>
                            {cartItems.amount !== 0 && (
                                <Button main onClick={this.handlePayClick}>
                                    Pay
                                </Button>
                            )}
                        </div>
                    </>
                )}
            </>
        );
    }
}

Checkout.defaultName = 'Checkout';
Checkout.propTypes = {
    setSummaryData: PropTypes.func.isRequired,
    cartItems: PropTypes.shape({
        amount: PropTypes.number,
        orders: PropTypes.array,
        totalPrice: PropTypes.number
    }).isRequired,
    history: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
    setSummaryData: summaryData => dispatch(setSummaryData(summaryData))
});

const mapStateToProps = store => ({
    cartItems: cartItemsSelector(store)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);
