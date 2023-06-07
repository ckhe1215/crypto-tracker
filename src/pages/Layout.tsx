import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";

export default function Layout() {
  const isDarkMode = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Outlet />
    </ThemeProvider>
  );
}
