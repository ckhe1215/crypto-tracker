import React from "react";
import styled from "styled-components";

interface IMainInfo {
  name?: string;
  price?: string;
}

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 2rem;

  h2 {
    font-size: 3.5rem;
    margin-right: 1rem;
  }

  h3 {
    font-size: 2rem;
    color: red;
  }
`;

export default function MainInfo({ name, price }: IMainInfo) {
  return (
    <Wrapper>
      <h2>{name}</h2>
      <h3>${price}</h3>
    </Wrapper>
  );
}
