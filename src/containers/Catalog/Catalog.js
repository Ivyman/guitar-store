import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { productsSelector } from '../../redux/products/selectors';
import {
    categoriesSelector,
    brandsSelector,
    pickupsSelector,
    tremolosSelector
} from '../../redux/settings/selectors';
import { cartItemAmountSelector } from '../../redux/cart/selectors';
import { filtersSelector } from '../../redux/filters/selectors';
import { addItemToCart, removeItemFromCart } from '../../redux/cart/actions';
import { setFilters, clearFilters } from '../../redux/filters/actions';
import Breadcrumbs from '../../components/Breadcrumbs';
import FiltersForm from '../../components/FiltersForm';
import ProductList from '../../components/ProductList';
import { arrayRange, getLastItem } from '../../utils/helper';

class Catalog extends React.Component {
    priceRange = arrayRange(10, 300);

    setFilteredProducts = (filters, products) => {
        let filteredProducts = products;

        for (const filterName in filters) {
            switch (filterName) {
                case 'query':
                    const query = filters[filterName].toLowerCase();

                    filteredProducts = filteredProducts.filter(product =>
                        product.name.toLowerCase().includes(query)
                    );
                    break;

                case 'priceFrom':
                    const priceFrom = filters[filterName] ? parseInt(filters[filterName], 10) : 0;

                    filteredProducts = filteredProducts.filter(
                        product => parseInt(product.price, 10) >= priceFrom
                    );
                    break;

                case 'priceTo':
                    const priceTo = filters[filterName]
                        ? parseInt(filters[filterName], 10)
                        : getLastItem(this.priceRange);

                    filteredProducts = filteredProducts.filter(
                        product => parseInt(product.price, 10) <= priceTo
                    );
                    break;

                default:
                    const filterData = filters[filterName];

                    if (!!Array.isArray(filterData) && filterData.length) {
                        filteredProducts = filteredProducts.filter(product =>
                            filterData.includes(product[filterName].id)
                        );
                    }
            }
        }

        return filteredProducts;
    };

    handleFiltersChange = filterData => {
        const { setFilters, clearFilters } = this.props;

        if (filterData.target !== 'clear') {
            setFilters(filterData);
        } else {
            clearFilters();
        }
    };

    render() {
        const {
            categories,
            brands,
            pickups,
            tremolos,
            addItemToCart,
            removeItemFromCart,
            cartItemAmount,
            filters,
            products
        } = this.props;
        const filteredProducts = this.setFilteredProducts(filters, products);
        const filtersState = {
            ...filters,
            priceTo: filters.priceTo ? filters.priceTo : getLastItem(this.priceRange)
        };

        return (
            <>
                <Breadcrumbs crumbs={[['Product catalog']]} />
                <h1 className="main-subtitle">Product catalog</h1>

                <FiltersForm
                    filtersState={filtersState}
                    priceRange={this.priceRange}
                    productsAmount={filteredProducts.length}
                    products={filteredProducts}
                    categories={categories}
                    brands={brands}
                    pickups={pickups}
                    tremolos={tremolos}
                    onFiltersChange={this.handleFiltersChange}
                />

                <ProductList
                    products={filteredProducts}
                    cartItemAmount={cartItemAmount}
                    onAddToCart={addItemToCart}
                    onRemoveFromCart={removeItemFromCart}
                />
            </>
        );
    }
}

Catalog.defaultName = 'Catalog';
Catalog.propTypes = {
    clearFilters: PropTypes.func.isRequired,
    setFilters: PropTypes.func.isRequired,
    addItemToCart: PropTypes.func.isRequired,
    removeItemFromCart: PropTypes.func.isRequired,
    filters: PropTypes.shape({
        brand: PropTypes.array,
        category: PropTypes.array,
        pickup: PropTypes.array,
        priceFrom: PropTypes.number,
        priceTo: PropTypes.number,
        query: PropTypes.string,
        tremolo: PropTypes.array
    }).isRequired,
    cartItemAmount: PropTypes.func.isRequired,
    products: PropTypes.array,
    categories: PropTypes.array,
    brands: PropTypes.array,
    pickups: PropTypes.array,
    tremolos: PropTypes.array
};
Catalog.defaultProps = {
    products: [],
    categories: [],
    brands: [],
    pickups: [],
    tremolos: []
};

const mapDispatchToProps = dispatch => ({
    clearFilters: () => dispatch(clearFilters()),
    setFilters: filterData => dispatch(setFilters(filterData)),
    addItemToCart: product => dispatch(addItemToCart(product)),
    removeItemFromCart: product => dispatch(removeItemFromCart(product))
});

const mapStateToProps = store => ({
    filters: filtersSelector(store),
    products: productsSelector(store),
    categories: categoriesSelector(store),
    brands: brandsSelector(store),
    pickups: pickupsSelector(store),
    tremolos: tremolosSelector(store),
    cartItemAmount: id => cartItemAmountSelector(id, store)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Catalog);
