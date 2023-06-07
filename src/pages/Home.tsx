import React from "react";
import { useQuery } from "react-query";
import { fetchCoins } from "../apis";
import CoinList from "../components/CoinList";
import Loading from "../components/Loading";

export default function Home() {
  const { isLoading, data } = useQuery("allCoins", fetchCoins);
  return (
    <>{isLoading ? <Loading /> : <CoinList coins={data.slice(0, 100)} />}</>
  );
}
