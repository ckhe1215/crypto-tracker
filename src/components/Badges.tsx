import React from "react";
import styled from "styled-components";

interface IBadge {
  rank?: number;
  symbol?: string;
}

const Wrapper = styled.div`
  margin-top: 1.5rem;
`;

const Badge = styled.span`
  padding: 0.5rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 0.5rem;
  color: black;
`;

export default function Badges({ rank, symbol }: IBadge) {
  return (
    <Wrapper>
      <Badge>Rank #{rank}</Badge>
      <Badge>{symbol}</Badge>
    </Wrapper>
  );
}
