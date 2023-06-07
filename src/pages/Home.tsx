import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "../apis";

export default function Home() {
  const { isLoading, data } = useQuery("allCoins", fetchCoins);
  return (
    <div>
      Home
      <Link to="/btc">btc</Link>
    </div>
  );
}
