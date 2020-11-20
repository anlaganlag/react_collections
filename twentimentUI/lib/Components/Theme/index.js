import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ThemeConfig from "./ThemeConfig";
import ThemeGlobalStyle from "./ThemeGlobalStyle";
import ThemeButton from "./ThemeButton";

function Theme({ children }) {
  const LOCALSTORAGE_THEME_KEY = "theme";

  const DEFAULT_THEME = "light";

  const [themeMode, setThemeMode] = useState(DEFAULT_THEME);

  useEffect(() => {
    setThemeMode(localStorage.getItem(LOCALSTORAGE_THEME_KEY) || DEFAULT_THEME);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider theme={ThemeConfig(themeMode)}>
      <ThemeGlobalStyle />
      <ThemeButton themeMode={themeMode} setThemeMode={setThemeMode} />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
