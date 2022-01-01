import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BinanceApiUrl = 'https://api.binance.com/api/v3/exchangeInfo';
let ws;
function Binance() {
  const [symbols, setSymbols] = useState([]);
  const [price, setPrice] = useState();
  const [name, setName] = useState('ETH');
  const [currency, setCurrency] = useState('ETH');

  //   console.log('symbols', symbols);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (ws) {
      ws.close(1000, 'Close previous stream');
      console.log('Close previous stream');
    }
    let url = `wss://stream.binance.com:9443/ws/${name.toLowerCase()}eur@trade`;
    console.log(url);
    ws = new WebSocket(url);

    ws.onmessage = ({ data }) => {
      let jsonData = JSON.parse(data);
      setPrice(jsonData.p);
    };
    return () => {
      ws.close(1000, 'Close previous stream');
      console.log('Close previous stream');
    };
  }, [currency]);

  const fetchData = () => {
    axios.get(BinanceApiUrl).then(({ data }) => {
      const filtered = data.symbols.filter(
        (symbol) => symbol.quoteAsset === 'EUR'
      );
      setSymbols(filtered);
    });
  };
  return (
    <>
      <div>Live Value</div>
      <label>
        {' '}
        Select a currency:
        <select
          value={currency}
          onChange={(e) => {
            setCurrency(e.target.value);
            setName(e.target.value);
            setPrice('');
          }}
        >
          {symbols.map((symbol) => (
            <option key={symbol.symbol}>{symbol.baseAsset}</option>
          ))}
        </select>
      </label>
      <div>{name}</div>
      <div>{price}</div>
    </>
  );
}

export default Binance;
