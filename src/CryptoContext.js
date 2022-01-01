import React, { createContext, useState, useEffect } from "react";

const cryptoContext = React.createContext();

function CryptoProvider({ children }) {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
    if (currency === "GBP") setSymbol("£");
  }, [currency]);

  const data = { name: "gilles", surname: "fischer" };
  const handler = () => {
    alert("Context callback");
  };
  return (
    <cryptoContext.Provider
      value={{ currency, symbol, setCurrency, data, handler }}
    >
      {children}
    </cryptoContext.Provider>
  );
}
const CryptoConsumer = cryptoContext.Consumer;

export default cryptoContext;
export { CryptoProvider, CryptoConsumer };
