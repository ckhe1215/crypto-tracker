import React from "react";
import CoinCard from "./CoinCard";

interface ICoin {
  id: string;
  is_active: boolean;
  is_new: boolean;
  name: string;
  rank: number;
  symbol: string;
  type: string;
}

interface ICoinList {
  coins: ICoin[];
}

export default function CoinList({ coins }: ICoinList) {
  return (
    <div>
      {coins.map((coin) => (
        <CoinCard key={coin.id} title={coin.name} id={coin.id} />
      ))}
    </div>
  );
}
