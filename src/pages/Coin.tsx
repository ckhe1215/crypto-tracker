import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinInfo, fetchCoinTickers } from "../apis";
import { InfoData, PriceData } from "../types/data";
import Loading from "../components/Loading";
import CoinInfo from "../components/CoinInfo";
import { useSetRecoilState } from "recoil";
import { coinPrice } from "../atom";

export default function Coin() {
  const { coinId } = useParams() as { coinId: string };
  const setCoinPrice = useSetRecoilState(coinPrice);
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["coinInfo", coinId],
    () => fetchCoinInfo(coinId)
  );
  const { isLoading: priceLoading, data: priceData } = useQuery<PriceData>(
    ["coinTicker", coinId],
    () => fetchCoinTickers(coinId),
    {
      onSuccess: (data) => setCoinPrice(data),
    }
  );

  const loading = infoLoading || priceLoading;
  return loading ? (
    <Loading />
  ) : (
    <CoinInfo infoData={infoData} priceData={priceData} />
  );
}
