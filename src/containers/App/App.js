import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import { isSummary, scrollTop } from '../../utils/helper';
import { cartAmountSelector } from '../../redux/cart/selectors';
import { productsFetchErrorSelector } from '../../redux/products/selectors';
import { settingsFetchErrorSelector } from '../../redux/settings/selectors';
import { clearCart } from '../../redux/cart/actions';
import { clearSummary } from '../../redux/summary/actions';
import { fetchProducts } from '../../redux/products/actions';
import { fetchSettings } from '../../redux/settings/actions';

class App extends React.PureComponent {
    state = { summaryWasVisited: false };

    componentDidMount() {
        const { history, fetchProducts, fetchSettings } = this.props;

        fetchProducts();
        fetchSettings();

        history.listen(() => scrollTop());
    }

    componentDidUpdate() {
        // Hook for cleaning cart and sumary
        let isSummaryPage = isSummary(this.props.location);
        let { summaryWasVisited } = this.state;
        const { clearCart, clearSummary } = this.props;

        if (isSummaryPage) {
            this.setState({ summaryWasVisited: true });
        }
        if (!isSummaryPage && summaryWasVisited) {
            this.setState({ summaryWasVisited: false }, () => {
                clearSummary();
                clearCart();
            });
        }
    }

    render() {
        const { cartAmount, settingsFetchError, productsFetchError, location } = this.props;

        return (
            <>
                <Header cartAmount={cartAmount} location={location} />
                <TransitionGroup>
                    <CSSTransition key={location.key} classNames="fade" timeout={300}>
                        <Main hasFetchError={settingsFetchError || productsFetchError} />
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </>
        );
    }
}

App.displayName = 'App';
App.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    fetchSettings: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    clearSummary: PropTypes.func.isRequired,
    cartAmount: PropTypes.number,
    settingsFetchError: PropTypes.bool,
    productsFetchError: PropTypes.bool,
    history: PropTypes.object.isRequired
};
App.defaultProps = {
    cartAmount: 0,
    settingsFetchError: false,
    productsFetchError: false
};

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchSettings: () => dispatch(fetchSettings()),
    clearCart: () => dispatch(clearCart()),
    clearSummary: () => dispatch(clearSummary())
});

const mapStateToProps = store => ({
    cartAmount: cartAmountSelector(store),
    settingsFetchError: settingsFetchErrorSelector(store),
    productsFetchError: productsFetchErrorSelector(store)
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
