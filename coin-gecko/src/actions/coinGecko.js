import CoinGecko from 'coingecko-api'
// import axios from 'axios';

const coinGecko = new CoinGecko();

// * TYPES
export const START_FETCH = 'START_FETCH';
export const CALL_SUCCESS = 'CALL_SUCCESS';
export const CALL_FAIL = 'CALL_FAIL';

// * ACTION
export const coinGeckoFetch = () => dispatch => {
    // ! OPTIONAL CALLS. MORE INFO HERE: https://github.com/miscavage/CoinGecko-API

    // ? coinGecko.ping().then(res => console.log(res))
    // ? coinGecko.global().then(res => console.log(res))
    // ? coinGecko.coins.all().then(res => console.log(res))
    // ? coinGecko.coins.list().then(res => console.log(res))

    dispatch({ type: START_FETCH });

    // * TICKERS RELATED TO VECHAIN
    coinGecko.coins.fetchTickers('vechain')
    .then(res => dispatch({ type: CALL_SUCCESS, payload: res.data}))
    .catch(err => dispatch({ type: CALL_FAIL, payload: err }))

    // * TICKERS RELATED TO VECHAIN
    coinGecko.coins.fetchTickers('vechain')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
};