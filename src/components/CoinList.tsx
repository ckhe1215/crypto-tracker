import React from "react";
import CoinCard from "./CoinCard";
import ICoin from "../types/coin";

interface ICoinList {
  coins: ICoin[];
}

export default function CoinList({ coins }: ICoinList) {
  return (
    <div>
      {coins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
