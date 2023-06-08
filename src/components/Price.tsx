import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { coinPrice } from "../atom";

const Wrapper = styled.div`
  margin-block: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Box = styled.div`
  padding: 2rem 1.5rem;

  &:nth-child(odd) {
    border-right: 1px solid gray;
  }

  &:nth-child(-n + 4) {
    border-bottom: 1px solid gray;
  }

  h3 {
    margin-bottom: 4rem;
    font-size: 1.4rem;
  }

  div {
    display: flex;
    justify-content: flex-end;
  }
`;

export default function Price() {
  const price = useRecoilValue(coinPrice);

  return (
    <Wrapper>
      <Box>
        <h3>all time high</h3>
        <div>
          <span>{price.quotes.USD.ath_price.toFixed(3)}</span>
        </div>
      </Box>
      <Box>
        <h3>1hr movement</h3>
        <div>
          <span>{price.quotes.USD.percent_change_1h}</span>
        </div>
      </Box>
      <Box>
        <h3>all time high date</h3>
        <div>
          <span>{price.quotes.USD.ath_date}</span>
        </div>
      </Box>
      <Box>
        <h3>market cap</h3>
        <div>
          <span>{price.quotes.USD.market_cap.toLocaleString()}</span>
        </div>
      </Box>
      <Box>
        <h3>max supply</h3>
        <div>
          <span>{price.max_supply.toLocaleString()}</span>
        </div>
      </Box>
      <Box>
        <h3>volume</h3>
        <div>
          <span>{price.quotes.USD.volume_24h.toFixed(3)}</span>
        </div>
      </Box>
    </Wrapper>
  );
}
