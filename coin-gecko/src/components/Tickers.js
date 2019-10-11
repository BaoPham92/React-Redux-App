import React from 'react';
import { link } from 'fs';

const Tickers = ({ tickers }) => {
    console.log(tickers)

    const { data } = tickers

    if (!!data === false) {
        return <p>Loading...</p>
    } else return (
        <div>
            <h2>{data.name} Tickers: </h2>
            <ul className={`ticker__container`}>
                {
                    data.tickers && data.tickers.map((ticker, key) => {
                        console.log(ticker, key)
                        return (
                            <li key={key}>
                                <h3>Market Pair: {ticker.base} / {ticker.target}</h3>
                                <p>Last Converted BTC Volumn: {ticker.converted_volume.btc && ticker.converted_volume.btc}</p>
                                <p>Last Converted ETH Volumn: {ticker.converted_volume.eth && ticker.converted_volume.eth}</p>
                                <p>Last Converted USD Volumn: {ticker.converted_volume.usd && ticker.converted_volume.usd}</p>
                            </li>
                        )
                    }
                    )
                }
            </ul>
        </div>
    )
}

export default Tickers