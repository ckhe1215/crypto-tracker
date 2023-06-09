import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinHistory } from "../apis";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import ApexChart from "react-apexcharts";
import { HistotyData } from "../types/data";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";

const Wrapper = styled.div`
  margin-top: 2rem;
`;

export default function Chart() {
  const { coinId } = useParams() as { coinId: string };
  const { isLoading, data } = useQuery<HistotyData[]>(
    ["coinHistory", coinId],
    () => fetchCoinHistory(coinId)
  );
  const isDark = useRecoilValue(isDarkAtom);
  const chartData = Array.isArray(data) ? [...data] : null;

  return (
    <Wrapper>
      {isLoading ? (
        <Loading />
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: chartData?.map((price) => ({
                x: new Date(price.time_open),
                y: [
                  parseFloat(price.open),
                  parseFloat(price.high),
                  parseFloat(price.low),
                  parseFloat(price.close),
                ],
              })) ?? [{ x: new Date(), y: [0, 0, 0, 0] }],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              axisBorder: { show: false },
              axisTicks: { show: false },
              labels: { show: false },
              type: "datetime",
              categories:
                chartData?.map((price) =>
                  new Date(price.time_close * 1000).toUTCString()
                ) ?? [],
            },
          }}
        />
      )}
    </Wrapper>
  );
}
