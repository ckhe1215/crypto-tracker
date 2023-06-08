import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atom";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0.7rem;
  font-size: 1.5rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ToggleButton = styled.button`
  background: none;
  border: 0px;
  padding: 0;
  font-size: 1.5rem;
`;

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkAtom);

  const onClick = () => {
    setIsDarkMode((current) => !current);
  };
  return (
    <Wrapper>
      <Link to="/">🏠</Link>
      <Title>Crypto Tracker</Title>
      <ToggleButton onClick={onClick}>{isDarkMode ? "☀️" : "🌕"}</ToggleButton>
    </Wrapper>
  );
}
