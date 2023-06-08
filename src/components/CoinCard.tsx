import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ICoin from "../types/coin";

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 1.3rem;
  border: 1px solid black;
  background-color: white;
  color: black;
  border-radius: 5px;
  margin-bottom: 0.6rem;
  font-size: 1rem;
`;

const Thumbnail = styled.img`
  width: 1.5rem;
  margin-right: 0.8rem;
`;

interface ICoinCard {
  coin: ICoin;
}

export default function CoinCard({ coin }: ICoinCard) {
  return (
    <Link to={`${coin.id}`}>
      <Card>
        <Thumbnail
          src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
        />
        <span>{coin.name}</span>
      </Card>
    </Link>
  );
}
