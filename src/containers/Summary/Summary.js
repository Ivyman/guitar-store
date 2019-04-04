import React from 'react';
import { connect } from 'react-redux';
import { cartItemsSelector } from '../../redux/cart/selectors';
import { summaryDataSelector } from '../../redux/summary/selectors';
import NoData from '../../components/NoData';
import SummarySheet from '../../components/SummarySheet';
import Breadcrumbs from '../../components/Breadcrumbs';

class Summary extends React.PureComponent {
    render() {
        const { cartItems, summaryData } = this.props;

        return (
            <>
                {cartItems.amount ? (
                    <>
                        <Breadcrumbs crumbs={[['Summary']]} />
                        <h1 className="main-subtitle text-center">
                            Thank you for choosing our store!
                        </h1>
                        <SummarySheet data={{ cartItems, summaryData }} />
                    </>
                ) : (
                    <NoData message="No any data for showing yet!" />
                )}
            </>
        );
    }
}

const mapStateToProps = store => ({
    cartItems: cartItemsSelector(store),
    summaryData: summaryDataSelector(store)
});

export default connect(mapStateToProps)(Summary);
