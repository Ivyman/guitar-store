import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../Dropdown';
import Select from '../Select';
import { wordPluraliser, currencyFormat } from '../../utils/helper';
import './styles.sass';

const FiltersForm = ({
    filtersState,
    productsAmount,
    categories,
    brands,
    tremolos,
    pickups,
    priceRange,
    onFiltersChange
}) => {
    const isChecked = (fieldName, value) =>
        filtersState[fieldName].find(item => item === value) !== undefined;

    const filtersAreDirty = () => {
        let filterState = false;
        let condForArrayFilters = filter =>
            Array.isArray(filtersState[filter]) && !!filtersState[filter].length;
        let condForFilters = filter =>
            !Array.isArray(filtersState[filter]) &&
            !!filtersState[filter] &&
            !(filter === 'priceTo' && filtersState[filter] === 2700);

        for (let filter in filtersState) {
            if (condForArrayFilters(filter) || condForFilters(filter)) filterState = true;
        }

        return filterState;
    };

    return (
        <form className="filters" onSubmit={event => event.preventDefault()}>
            <div className="filters__searchbar">
                <input
                    name="query"
                    type="text"
                    placeholder="search"
                    className="input input--large"
                    value={filtersState.query}
                    onChange={event =>
                        onFiltersChange({ value: event.target.value, target: 'query' })
                    }
                />
                <span className="filters__amount">
                    {productsAmount} {wordPluraliser('Guitar', productsAmount)}
                </span>
            </div>
            <div className="filters__bar">
                <Select
                    merge
                    value={filtersState.priceFrom}
                    onChange={event =>
                        onFiltersChange({
                            value: parseInt(event.target.value, 10),
                            target: 'priceFrom'
                        })
                    }
                >
                    {priceRange.map(
                        (item, index) =>
                            index < priceRange.length - 1 && (
                                <option key={item} value={item}>
                                    {currencyFormat(item)}
                                </option>
                            )
                    )}
                </Select>

                <Select
                    merge
                    name="priceTo"
                    value={filtersState.priceTo}
                    onChange={event =>
                        onFiltersChange({
                            value: parseInt(event.target.value, 10),
                            target: 'priceTo'
                        })
                    }
                >
                    {priceRange.map(
                        (item, index) =>
                            index && (
                                <option key={item} value={item}>
                                    {currencyFormat(item)}
                                </option>
                            )
                    )}
                </Select>

                <Dropdown title="Brand" selectedItems={filtersState.brand.length}>
                    {brands.map(brand => (
                        <label key={`${brand.id}-${brand.name}`}>
                            <input
                                name="brand"
                                type="checkbox"
                                value={brand.id}
                                checked={isChecked('brand', brand.id)}
                                onChange={event =>
                                    onFiltersChange({
                                        value: event.target.checked,
                                        target: ['brand', brand.id]
                                    })
                                }
                            />
                            {brand.name}
                        </label>
                    ))}
                </Dropdown>

                <Dropdown title="Pickups" selectedItems={filtersState.pickup.length}>
                    {pickups.map(pickup => (
                        <label key={`${pickup.id}-${pickup.name}`}>
                            <input
                                name="pickup"
                                type="checkbox"
                                value={pickup.id}
                                checked={isChecked('pickup', pickup.id)}
                                onChange={event =>
                                    onFiltersChange({
                                        value: event.target.checked,
                                        target: ['pickup', pickup.id]
                                    })
                                }
                            />
                            {pickup.name}
                        </label>
                    ))}
                </Dropdown>

                <Dropdown title="Tremolo" selectedItems={filtersState.tremolo.length}>
                    {tremolos.map(tremolo => (
                        <label key={`${tremolo.id}-${tremolo.name}`}>
                            <input
                                name="tremolo"
                                type="checkbox"
                                value={tremolo.id}
                                checked={isChecked('tremolo', tremolo.id)}
                                onChange={event =>
                                    onFiltersChange({
                                        value: event.target.checked,
                                        target: ['tremolo', tremolo.id]
                                    })
                                }
                            />
                            {tremolo.name}
                        </label>
                    ))}
                </Dropdown>

                <Dropdown title="Category" selectedItems={filtersState.category.length}>
                    {categories.map(category => (
                        <label key={`${category.id}-${category.name}`}>
                            <input
                                name="category"
                                type="checkbox"
                                value={category.id}
                                checked={isChecked('category', category.id)}
                                onChange={event =>
                                    onFiltersChange({
                                        value: event.target.checked,
                                        target: ['category', category.id]
                                    })
                                }
                            />
                            {category.name}
                        </label>
                    ))}
                </Dropdown>

                <div className="filters__close">
                    {filtersAreDirty() && (
                        <button
                            className="close-button"
                            onClick={() =>
                                onFiltersChange({
                                    value: null,
                                    target: 'clear'
                                })
                            }
                        />
                    )}
                </div>
            </div>
        </form>
    );
};

FiltersForm.defaultName = 'FiltersForm';
FiltersForm.propTypes = {
    onFiltersChange: PropTypes.func.isRequired,
    filtersState: PropTypes.shape({
        brand: PropTypes.array,
        category: PropTypes.array,
        pickup: PropTypes.array,
        priceFrom: PropTypes.number,
        priceTo: PropTypes.number,
        query: PropTypes.string,
        tremolo: PropTypes.array
    }),
    productsAmount: PropTypes.number,
    categories: PropTypes.array,
    brands: PropTypes.array,
    tremolos: PropTypes.array,
    pickups: PropTypes.array,
    priceRange: PropTypes.array
};
FiltersForm.defaultProps = {
    filtersState: {
        brand: [],
        category: [],
        pickup: [],
        priceFrom: 0,
        priceTo: 0,
        query: '',
        tremolo: []
    },
    productsAmount: 0,
    categories: [],
    brands: [],
    tremolos: [],
    pickups: [],
    priceRange: []
};

export default FiltersForm;
