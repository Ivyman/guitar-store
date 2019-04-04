import React from 'react';
import onClickOutside from 'react-onclickoutside';
import './styles.sass';

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

export default onClickOutside(Dropdown, clickOutsideConfig);
