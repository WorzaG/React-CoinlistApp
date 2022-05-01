import React from "react";
import "../App.css";

export default function Coin({
  name,
  image,
  symbol,
  currentprice,
  marketcap,
  rank,
  pricepercentage24h,
}) {
  const numberto = (number) => {
    return number.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1" + ".");
  };

  const percentTo = (number) => {
    if (number > 0) {
      return <li style={{ color: "green" }}>{number}%</li>;
    } else {
      return <li style={{ color: "red" }}>{number}%</li>;
    }
  };

  return (
    <div className="coin">
      <ul>
        <div className="info">
          <li>{rank}</li>
          <li>
            <img src={image} />
          </li>
          <li>{name}</li>
          <li className="symbol">{symbol}</li>
        </div>
        <div className="veriler">
          <li>${numberto(currentprice)}</li>
          {percentTo(pricepercentage24h)}
          <li>${numberto(marketcap)}</li>
        </div>
      </ul>
    </div>
  );
}
