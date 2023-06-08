import React, { useState } from "react";
import styled from "styled-components";
import Price from "./Price";
import Chart from "./Chart";

const Button = styled.button`
  margin-right: 1em;
  background-color: ${(props) => props.theme.buttonColor};
  border-radius: 8px;
  border-width: 0;
  color: #333333;
  cursor: pointer;
  line-height: 20px;
  padding: 0.5rem 0.8rem;
  text-align: center;
  vertical-align: baseline;
`;

export default function AdditionalInfo() {
  const [isChartMode, setIsChartMode] = useState(true);

  const onChartClick = () => {
    setIsChartMode(true);
  };

  const onPriceClick = () => {
    setIsChartMode(false);
  };

  return (
    <div>
      <div>
        <Button onClick={onChartClick}>Chart</Button>
        <Button onClick={onPriceClick}>Price</Button>
      </div>
      {isChartMode ? <Chart /> : <Price />}
    </div>
  );
}
