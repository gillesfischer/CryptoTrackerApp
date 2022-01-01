import React, { useContext } from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import cryptoContext from "../CryptoContext";

function HomePage() {
  const { symbol } = useContext(cryptoContext);
  return (
    <>
      <Banner></Banner>
      <CoinsTable></CoinsTable>
    </>
  );
}

export default HomePage;
