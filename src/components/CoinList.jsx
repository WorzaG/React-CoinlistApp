import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";

export default function CoinList() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const fetchdata = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      )
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="List">
      <form>
        <input
          type="text"
          name="search"
          placeholder="search.."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="listinfo">
        <ul>
          <div className="general">
            <li>#</li>
            <li>Name</li>
          </div>
          <div className="details">
            <li>Price</li>
            <li>24h %</li>
            <li>Market Cap</li>
          </div>
        </ul>
      </div>
      <>
        {data
          .filter((items) => {
            if (search == "") {
              return items;
            } else if (
              items.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return items;
            }
          })
          .map((items) => (
            <Coin
              name={items.name}
              image={items.image}
              rank={items.market_cap_rank}
              currentprice={items.current_price}
              symbol={items.symbol}
              marketcap={items.market_cap}
              pricepercentage24h={items.price_change_percentage_24h}
            />
          ))}
      </>
    </div>
  );
}
