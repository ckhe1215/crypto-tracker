import React from "react";
import { InfoData, PriceData } from "../types/data";
import Badges from "./Badges";
import styled from "styled-components";
import MainInfo from "./MainInfo";
import Description from "./Description";
import AdditionalInfo from "./AdditionalInfo";

interface ICoinInfo {
  infoData?: InfoData;
  priceData?: PriceData;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function CoinInfo({ infoData, priceData }: ICoinInfo) {
  return (
    <Wrapper>
      <Badges rank={infoData?.rank} symbol={infoData?.symbol} />
      <MainInfo
        name={infoData?.name}
        price={priceData?.quotes.USD.price.toFixed(3)}
      />
      <Description description={infoData?.description} />
      <AdditionalInfo />
    </Wrapper>
  );
}
