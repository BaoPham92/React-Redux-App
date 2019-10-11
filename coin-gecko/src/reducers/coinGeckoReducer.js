// * COINGECKO REDUCER

const coinGeckoReducer = {
    data: {},
    isFetching: false,
    error: undefined
}

export default (state = coinGeckoReducer, action) => {
    switch (action.type) {
        case 'START_FETCH':
            return {
                ...state,
                isFetching: true,
                error: undefined
            };
        case 'CALL_SUCCESS':
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        case 'CALL_FAIL':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}