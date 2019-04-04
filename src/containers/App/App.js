import React from 'react';
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
        const { cartAmount, settingsFetchError, productsFetchErrorSelector, location } = this.props;

        return (
            <>
                <Header cartAmount={cartAmount} location={location} />
                <TransitionGroup>
                    <CSSTransition key={location.key} classNames="fade" timeout={300}>
                        <Main hasFetchError={settingsFetchError || productsFetchErrorSelector} />
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchProducts: () => dispatch(fetchProducts()),
    fetchSettings: () => dispatch(fetchSettings()),
    clearCart: () => dispatch(clearCart()),
    clearSummary: () => dispatch(clearSummary())
});

const mapStateToProps = store => ({
    cartAmount: cartAmountSelector(store),
    settingsFetchError: settingsFetchErrorSelector(store),
    productsFetchErrorSelector: productsFetchErrorSelector(store)
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
