const ThemeConfig = (themeMode) => {
  const boxShadow = [
    null,
    "0 1px 1px 0 rgba(65, 69, 73, 0.3),0 1px 3px 1px rgba(65, 69, 73, 0.15)",
    "0 3px 6px rgba(0, 0, 0, .16), 0 1px 2px rgba(0, 0, 0, .23)",
    " 0 1px 5px 0 rgba(0, 0, 0, 0.1)",
  ];

  const light = ["#eeeeee", "#f5f5f5", "#fff"];

  const dark = ["#212121", "#424242", "#616161"];

  const blue = ["#1565c0", "#2196f3", "#90caf9"];

  const green = ["#2e7d32", "#4caf50", "#a5d6a7"];

  const red = ["#c62828", "#f44336", "#ef9a9a"];

  const standardPalette = { _light: light, _dark: dark, blue, green, red };

  const colorTheme = {
    light: { light, dark, ...standardPalette },
    dark: { light: dark, dark: light, ...standardPalette },
  };

  const fontFamily = "Roboto, Helvetica, Arial, sans-serif";

  const fontSize = {
    xxs: "10px",
    xs: "12px",
    s: "14px",
    m: "16px",
    l: "18px",
    xl: "20px",
    xxl: "22px",
    xxxl: "24px",
  };

  const preset = {
    header: {
      top: "5px",
      side: "20px",
    },
  };

  const transition = "0.2s";

  const zIndex = {
    mainContentHeader: 1,
    mainContentEmoji: 2,
    searchFilter: 3,
    header: 4,
    themeButton: 5,
  };

  return {
    boxShadow,
    color: colorTheme[themeMode] || colorTheme.light,
    fontFamily,
    fontSize,
    preset,
    transition,
    zIndex,
  };
};

export default ThemeConfig;
