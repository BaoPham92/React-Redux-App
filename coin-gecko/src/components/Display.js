import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// * ACTIONS
import { coinGeckoFetch } from '../actions/coinGecko';

// * COMPONENTS
import Tickers from './Tickers'

const Display = (props) => {

    // ! LOG DATA!
    console.log(props)

    useEffect(() => {
        return props.coinGeckoFetch();
    }, [])

    return (
        <>
            <h1>Something here</h1>
            <Tickers tickers={props.data && props.data}/>
        </>
    )
}

const mapStateToProps = state => {
    return {
        data: state.coinGecko,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { coinGeckoFetch })(Display)