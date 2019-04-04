import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router';
import Throbber from './components/Throbber';
import { route } from './utils/config';

const HomePage = lazy(() => import('./containers/Home'));
const CartPage = lazy(() => import('./containers/Cart'));
const CatalogPage = lazy(() => import('./containers/Catalog'));
const ProductPage = lazy(() => import('./containers/Product'));
const SummaryPage = lazy(() => import('./containers/Summary'));
const CheckoutPage = lazy(() => import('./containers/Checkout'));
const NotFoundPage = lazy(() => import('./components/NotFound'));

const Router = () => (
    <Suspense fallback={<Throbber />}>
        <Switch>
            <Route exact path={route.home.path} component={props => <HomePage {...props} />} />
            <Route
                exact
                path={route.catalog.path}
                component={props => <CatalogPage {...props} />}
            />
            <Route exact path={route.cart.path} component={props => <CartPage {...props} />} />
            <Route
                exact
                path={route.product.path}
                component={props => <ProductPage {...props} />}
            />
            <Route
                exact
                path={route.checkout.path}
                component={props => <CheckoutPage {...props} />}
            />
            <Route
                exact
                path={route.summary.path}
                component={props => <SummaryPage {...props} />}
            />
            <Route component={props => <NotFoundPage {...props} />} />
        </Switch>
    </Suspense>
);

export default Router;
