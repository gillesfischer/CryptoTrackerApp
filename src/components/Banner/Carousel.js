import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { TrendingCoins } from "../../config/api";
import cryptoContext from "../../CryptoContext";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "uppercase",
    color: "white",
  },
}));

function Carousel() {
  const classes = useStyles();
  const { currency, symbol } = useContext(cryptoContext);
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  console.log(trending);

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;
    const profitColor = profit ? "green" : "red";
    return (
      <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>
        <img
          src={coin.image}
          alt={coin.name}
          height="80"
          style={{ marginBottom: 10 }}
        ></img>
        <span>{coin.name}</span>
        <span>
          {symbol}
          {coin.current_price.toFixed(2)}
          &nbsp;
          <b style={{ color: profit ? "green" : "red" }}>
            {profit && "+"}
            {coin.price_change_percentage_24h.toFixed(2) + "%"}
          </b>
        </span>
      </Link>
    );
    // return <Link path={`/coins/${coin.id}`}></Link>;
  });
  const responsive = {
    0: { items: 2 },
    512: { items: 4 },
  };
  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={100}
        animationDuration={1500}
        disableDotsControls
        responsive={responsive}
        autoPlay
        items={items}
      ></AliceCarousel>
    </div>
  );
}

export default Carousel;
