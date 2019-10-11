import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// * REDUCER IMPORTS
import coinGeckoReducer from '../reducers/coinGeckoReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            coinGecko: coinGeckoReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}