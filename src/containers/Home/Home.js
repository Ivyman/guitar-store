import React from 'react';
import { connect } from 'react-redux';
import { categoriesSelector } from '../../redux/settings/selectors';
import { setFilters, clearFilters } from '../../redux/filters/actions';
import { route } from '../../utils/config';
import Categories from '../../components/Categories';

class Home extends React.Component {
    handleChoseCategory = categoryId => {
        const { setFilters, clearFilters, history } = this.props;

        clearFilters();
        setFilters({ value: true, target: ['category', categoryId] });
        history.push(route.catalog.link);
    };

    render() {
        const { categories } = this.props;

        return (
            <>
                <p className="main-subtitle text-center">Or chose by category</p>
                <Categories categories={categories} onChoseCategory={this.handleChoseCategory} />
            </>
        );
    }
}

const mapStateToProps = store => ({
    categories: categoriesSelector(store)
});

const mapDispatchToProps = dispatch => ({
    setFilters: filterData => dispatch(setFilters(filterData)),
    clearFilters: () => dispatch(clearFilters())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
