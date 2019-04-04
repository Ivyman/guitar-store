import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import './styles.sass';

/**
 * Define Dropdown component like a class component
 * for catch instase on clickOutsideConfig function
 */
class Dropdown extends React.Component {
    state = { isOpen: false };

    handleToggle = () => this.setState({ isOpen: !this.state.isOpen });
    handleClickOutside = () => this.setState({ isOpen: false });

    render() {
        const { children, title, selectedItems } = this.props;

        return (
            <div className={`dropdown ${this.state.isOpen ? 'dropdown--open' : ''}`}>
                <div className="dropdown__inner">
                    <div
                        className={`dropdown__title ${
                            selectedItems ? 'dropdown__title--selected' : ''
                        }`}
                        onClick={this.handleToggle}
                    >
                        {title} {!!selectedItems && `(${selectedItems})`}
                    </div>
                    <ul className="dropdown__list">
                        {children.map((item, index) => (
                            <li className="dropdown__item" key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

const clickOutsideConfig = {
    handleClickOutside: instance => {
        return instance.handleClickOutside;
    }
};

Dropdown.defaultName = 'Dropdown';
Dropdown.propTypes = {
    onSettingsChange: PropTypes.func,
    hasError: PropTypes.bool
};
Dropdown.defaultProps = {
    onSettingsChange: null,
    hasError: false
};

export default onClickOutside(Dropdown, clickOutsideConfig);
