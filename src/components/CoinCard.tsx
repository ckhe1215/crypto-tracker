import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  padding: 20px 10px;
  border: 1px solid black;
  background-color: white;
  border-radius: 5px;
  margin-top: 10px;
`;

export default function CoinCard({ title, id }: { title: string; id: string }) {
  return (
    <Link to={`${id}`}>
      <Card>{title}</Card>
    </Link>
  );
}
