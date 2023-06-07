import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atom";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(isDarkAtom);

  const onClick = () => {
    setIsDarkMode((current) => !current);
  };
  return (
    <Wrapper>
      <Link to="/">🏠</Link>
      <h1>Crypto Tracker</h1>
      <button onClick={onClick}>{isDarkMode ? "☀️" : "🌕"}</button>
    </Wrapper>
  );
}
