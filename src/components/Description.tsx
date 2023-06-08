import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  padding: 1.3rem 1rem;
  margin-block: 1.5rem;
`;

export default function Description({ description }: { description?: string }) {
  return <Box>{description}</Box>;
}
